export function welcome_email(name: string, email: string): string {
	return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f9f9f9;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    margin-bottom: 20px;
                }
                .header h1 {
                    color: #4CAF50;
                }
                .content {
                    text-align: left;
                }
                .footer {
                    margin-top: 20px;
                    text-align: center;
                    font-size: 0.9em;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Welcome, ${name}!</h1>
                </div>
                <div class="content">
                    <p>We're thrilled to have you join our service. We hope you have a great experience with us.</p>
                    <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
                </div>
                <div class="footer">
                    <p>Best regards,<br>${name}</p>
                    <p>${email}</p>
                </div>
            </div>
        </body>
        </html>
    `;
}
