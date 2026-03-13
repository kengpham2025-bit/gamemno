<?php
session_start();
header('Content-Type: application/json');

// Catch all errors as JSON
set_error_handler(function($errno, $errstr) {
    echo json_encode(['success' => false, 'message' => 'Lỗi server: ' . $errstr]);
    exit;
});

try {
    require_once '../DB.php';
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Lỗi kết nối CSDL: ' . $e->getMessage()]);
    exit;
}

if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    echo json_encode(['success' => false, 'message' => 'Chưa đăng nhập.']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$current_password = $_POST['current_password'] ?? '';
$new_password = $_POST['new_password'] ?? '';
$confirm_password = $_POST['confirm_password'] ?? '';

if (empty($current_password) || empty($new_password) || empty($confirm_password)) {
    echo json_encode(['success' => false, 'message' => 'Vui lòng điền đầy đủ tất cả các trường.']);
    exit;
}

if ($new_password !== $confirm_password) {
    echo json_encode(['success' => false, 'message' => 'Mật khẩu mới không khớp.']);
    exit;
}

if (strlen($new_password) < 4) {
    echo json_encode(['success' => false, 'message' => 'Mật khẩu mới phải có ít nhất 4 ký tự.']);
    exit;
}

// Use username as primary lookup (always available in session)
$admin_username = $_SESSION['admin_username'] ?? 'admin';

// Verify current password
$stmt = $mysqli->prepare("SELECT id, password FROM admin_users WHERE username = ?");
$stmt->bind_param("s", $admin_username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'Không tìm thấy tài khoản.']);
    exit;
}

$user = $result->fetch_assoc();
$db_pass = $user['password'];
$is_valid = false;

if (strlen($db_pass) === 32) {
    // MD5 check
    $is_valid = (md5($current_password) === $db_pass);
} else {
    // bcrypt check
    $is_valid = password_verify($current_password, $db_pass);
}

if (!$is_valid) {
    echo json_encode(['success' => false, 'message' => 'Mật khẩu hiện tại không đúng.']);
    exit;
}

// Update password - save as MD5 to match existing format
$new_hashed = md5($new_password);
$stmt2 = $mysqli->prepare("UPDATE admin_users SET password = ? WHERE id = ?");
$admin_id = $user['id'];
$stmt2->bind_param("si", $new_hashed, $admin_id);

if ($stmt2->execute()) {
    echo json_encode(['success' => true, 'message' => 'Đổi mật khẩu thành công!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Lỗi hệ thống, vui lòng thử lại.']);
}
?>
