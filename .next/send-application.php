<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$role = isset($_POST['applied_role']) ? trim(strip_tags($_POST['applied_role'])) : 'Internship';
$portfolio = isset($_POST['portfolio_or_github']) ? trim(strip_tags($_POST['portfolio_or_github'])) : 'N/A';
$description = isset($_POST['description_message']) ? trim(strip_tags($_POST['description_message'])) : '';

if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid name and email are required.']);
    exit;
}

$to = 'support@codinghouse.in';
$subject = "New Internship Application: {$name} — {$role}";

$boundary = md5(time());

// Headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "From: Coding House Website <support@codinghouse.in>\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

// HTML Message Content
$htmlContent = "
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; max-width: 600px; }
    h2 { color: #0f172a; margin-top: 0; font-size: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
    td.label { font-weight: bold; width: 35%; color: #475569; background: #f1f5f9; }
    .desc { background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #cbd5e1; white-space: pre-wrap; font-size: 14px; }
  </style>
</head>
<body>
  <div class='card'>
    <h2>🎓 New Internship Application</h2>
    <table>
      <tr><td class='label'>Candidate Name:</td><td><strong>" . htmlspecialchars($name) . "</strong></td></tr>
      <tr><td class='label'>Applied Role:</td><td><strong>" . htmlspecialchars($role) . " (Intern)</strong></td></tr>
      <tr><td class='label'>Email Address:</td><td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td></tr>
      <tr><td class='label'>Phone / WhatsApp:</td><td>" . htmlspecialchars($phone) . "</td></tr>
      <tr><td class='label'>Portfolio / GitHub:</td><td>" . htmlspecialchars($portfolio) . "</td></tr>
    </table>
    <h3 style='margin-top: 20px; font-size: 15px; color: #334155;'>About Candidate & Skills:</h3>
    <div class='desc'>" . nl2br(htmlspecialchars($description)) . "</div>
  </div>
</body>
</html>
";

// Body with HTML part
$body = "--{$boundary}\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n";
$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$body .= $htmlContent . "\r\n";

// Handle Attachment if uploaded
$fileUploaded = false;
$attachmentKey = isset($_FILES['attachment']) ? 'attachment' : (isset($_FILES['resume']) ? 'resume' : null);

if ($attachmentKey && isset($_FILES[$attachmentKey]['tmp_name']) && is_uploaded_file($_FILES[$attachmentKey]['tmp_name'])) {
    $fileName = basename($_FILES[$attachmentKey]['name']);
    $fileSize = $_FILES[$attachmentKey]['size'];
    $fileTmpPath = $_FILES[$attachmentKey]['tmp_name'];
    $fileType = $_FILES[$attachmentKey]['type'];

    // Max 15MB file size
    if ($fileSize <= 15 * 1024 * 1024) {
        $handle = fopen($fileTmpPath, 'r');
        $content = fread($handle, $fileSize);
        fclose($handle);

        $encodedContent = chunk_split(base64_encode($content));

        $body .= "--{$boundary}\r\n";
        $body .= "Content-Type: " . ($fileType ? $fileType : 'application/octet-stream') . "; name=\"{$fileName}\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"{$fileName}\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $encodedContent . "\r\n";
        $fileUploaded = true;
    }
}

$body .= "--{$boundary}--";

$mailSent = @mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Application and resume sent successfully to ' . $to,
        'attachment_included' => $fileUploaded
    ]);
} else {
    // If mail() failed on server
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send email via server mail service.'
    ]);
}
