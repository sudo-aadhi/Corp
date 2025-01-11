export const ForgotPasswordTemplate = ({
  reset_password_link,
}: {
  reset_password_link: string;
}) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #000000;
      padding: 40px;
      border-radius: 16px;
      position: relative;
      overflow: hidden;
    }
    .email-container::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150%;
      height: 150%;
      background: radial-gradient(circle, rgba(0, 255, 128, 0.2), rgba(0, 255, 128, 0) 70%);
      filter: blur(80px);
      z-index: 1;
    }
    .header {
      text-align: center;
      padding-bottom: 24px;
      position: relative;
      z-index: 2;
    }
    .header img {
      max-width: 120px;
    }
    .content {
      text-align: center;
      padding: 24px 0;
      position: relative;
      z-index: 2;
    }
    .content h1 {
      font-size: 28px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .content p {
      font-size: 16px;
      color: #d1d5db;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .button {
      display: inline-block;
      margin: 20px 0;
      padding: 14px 32px;
      font-size: 16px;
      font-weight: 600;
      color: #000000;
      background: linear-gradient(135deg, #00ff88, #00cc66);
      border-radius: 8px;
      text-decoration: none;
      box-shadow: 0 4px 6px rgba(0, 255, 128, 0.2);
      transition: all 0.3s ease;
      position: relative;
      z-index: 2;
    }
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 255, 128, 0.3);
    }
    .footer {
      text-align: center;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 14px;
      color: #6b7280;
      position: relative;
      z-index: 2;
    }
    .footer a {
      color: #00ff88;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body style="background-color: #000000; margin: 0; padding: 0;">
  <!-- Outer table to enforce background color in email clients -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #000000;">
    <tr>
      <td align="center">
        <div class="email-container" style="background-color: #000000; max-width: 600px; margin: 20px auto; padding: 40px; border-radius: 16px; position: relative; overflow: hidden;">
          <div class="header">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/042/845/200/small/recycle-reuse-reduce-logo-design-for-decorate-earth-day-enviralment-png.png" alt="Advanced Notion Logo" style="max-width: 120px;" width="50">
          </div>
          <div class="content">
            <h1 style="font-size: 28px; font-weight: 700; color: #ffffff; margin-bottom: 16px;">Reset Your Password</h1>
            <p style="font-size: 16px; color: #d1d5db; line-height: 1.6; margin-bottom: 24px;">We received a request to reset your password. Click the button below to reset it</p>
            <a href=${reset_password_link} class="button" style="display: inline-block; margin: 20px 0; padding: 14px 32px; font-size: 16px; font-weight: 600; color: #000000; background: linear-gradient(135deg, #00ff88, #00cc66); border-radius: 8px; text-decoration: none; box-shadow: 0 4px 6px rgba(0, 255, 128, 0.2); transition: all 0.3s ease; position: relative; z-index: 2;">Reset Password</a>
            <p style="font-size: 16px; color: #d1d5db; line-height: 1.6; margin-bottom: 24px;">
              If the button doesn't work, please
              <a href=${reset_password_link} style="color: #00ff88; text-decoration: underline; font-weight: 600;">click here</a>
              to reset your password.
            </p>
            <p style="font-size: 16px; color: #d1d5db; line-height: 1.6; margin-bottom: 24px;">If you didn't request a password reset, please ignore this email.</p>
          </div>
          <div class="footer">
            <p style="font-size: 14px; color: #6b7280;">&copy; 2025 Advanced Notion. All rights reserved.</p>
            <p style="font-size: 14px; color: #6b7280;">You are receiving this email because you requested a password reset on <a href="http://localhost:3000" style="color: #00ff88; text-decoration: none;">Advanced Notion</a>.</p>
          </div>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
