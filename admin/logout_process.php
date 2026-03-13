<?php
session_start();
header('Content-Type: application/json');

// Handle logout
if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    unset($_SESSION['admin_logged_in']);
    unset($_SESSION['admin_user_id']);
    unset($_SESSION['admin_username']);
    echo json_encode(['success' => true]);
    exit;
}
?>
