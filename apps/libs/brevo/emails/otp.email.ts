export function otp_email(otp: string, email: string) {
	return `
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 400px; margin: auto;">
        <h2 style="color: #333;">Your OTP Code</h2>
        <p style="font-size: 16px; color: #555;">Hello, ${email}</p>
        <p style="font-size: 16px; color: #555;">Use the following OTP to complete your process:</p>
        <h3 style="font-size: 24px; color: #007BFF; margin: 20px 0;">${otp}</h3>
        <p style="font-size: 14px; color: #999;">If you did not request this, please ignore this email.</p>
    </div>
    `;
}
