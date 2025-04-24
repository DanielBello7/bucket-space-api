"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otp_email = otp_email;
function otp_email(otp, email) {
    return "\n    <div style=\"font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 400px; margin: auto;\">\n        <h2 style=\"color: #333;\">Your OTP Code</h2>\n        <p style=\"font-size: 16px; color: #555;\">Hello, ".concat(email, "</p>\n        <p style=\"font-size: 16px; color: #555;\">Use the following OTP to complete your process:</p>\n        <h3 style=\"font-size: 24px; color: #007BFF; margin: 20px 0;\">").concat(otp, "</h3>\n        <p style=\"font-size: 14px; color: #999;\">If you did not request this, please ignore this email.</p>\n    </div>\n    ");
}
//# sourceMappingURL=otp.email.js.map