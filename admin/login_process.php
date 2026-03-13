<?php
session_start();
require_once '../DB.php'; // Adjust path if needed

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    // Typically Windows 11 admin login just asks for password or we assume 'admin'
    $username = $_POST['username'] ?? 'Administrator';

    if (empty($password)) {
        echo json_encode(['success' => false, 'message' => 'Vui lòng nhập mật khẩu.']);
        exit;
    }

    $stmt = $mysqli->prepare("SELECT id, password FROM admin_users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $db_pass = $user['password'];
        $is_valid = false;

        if (strlen($db_pass) === 32) {
            // MD5 check
            $is_valid = (md5($password) === $db_pass);
        }
        else {
            // bcrypt check
            $is_valid = password_verify($password, $db_pass);
        }

        if ($is_valid) {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['admin_user_id'] = $user['id'];
            $_SESSION['admin_username'] = $username;

            echo json_encode(['success' => true]);
        }
        else {
            echo json_encode(['success' => false, 'message' => 'Mật khẩu không chính xác.']);
        }
    }
    else {
        echo json_encode(['success' => false, 'message' => 'Mật khẩu không chính xác.']);
    }
}
else {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
}
?>
