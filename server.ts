import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    console.log("Received contact form submission:", req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      console.log("Validation failed: Missing fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const emailUser = process.env.EMAIL_USER || process.env.email_user;
      const emailPass = process.env.EMAIL_PASS || process.env.email_pass;

      if (!emailUser || !emailPass) {
        console.error("Missing email credentials in environment variables.");
        return res.status(500).json({ 
          error: "Server configuration error: Missing email credentials.",
          details: "Please ensure EMAIL_USER and EMAIL_PASS are set in the Settings > Environment Variables menu."
        });
      }

      console.log("Attempting to send email via Nodemailer using:", emailUser);
      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: emailUser,
        to: "willywilliam1610@gmail.com",
        subject: `🚀 New Message from ${name}: ${subject || "No Subject"}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject || "No Subject"}
          
          Message:
          ${message}
        `,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                  background-color: #0a0a0a;
                  color: #ffffff;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  max-width: 600px;
                  margin: 40px auto;
                  background-color: #111111;
                  border-radius: 24px;
                  overflow: hidden;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
                }
                .header {
                  background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
                  padding: 40px 20px;
                  text-align: center;
                }
                .header h1 {
                  margin: 0;
                  font-size: 28px;
                  font-weight: 800;
                  letter-spacing: -0.025em;
                  color: white;
                  text-transform: uppercase;
                }
                .content {
                  padding: 40px;
                }
                .field {
                  margin-bottom: 24px;
                }
                .label {
                  font-size: 12px;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  color: rgba(255, 255, 255, 0.4);
                  margin-bottom: 8px;
                }
                .value {
                  font-size: 18px;
                  color: #ffffff;
                  font-weight: 500;
                }
                .message-box {
                  background-color: rgba(255, 255, 255, 0.05);
                  border-radius: 16px;
                  padding: 24px;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  line-height: 1.6;
                  color: rgba(255, 255, 255, 0.8);
                  white-space: pre-wrap;
                }
                .footer {
                  padding: 30px;
                  text-align: center;
                  border-top: 1px solid rgba(255, 255, 255, 0.1);
                  background-color: rgba(255, 255, 255, 0.02);
                }
                .footer p {
                  margin: 0;
                  font-size: 14px;
                  color: rgba(255, 255, 255, 0.3);
                }
                .btn {
                  display: inline-block;
                  margin-top: 20px;
                  padding: 12px 24px;
                  background-color: #8b5cf6;
                  color: white;
                  text-decoration: none;
                  border-radius: 12px;
                  font-weight: 600;
                  font-size: 14px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>My Portfolio</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Sender Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Subject</div>
                    <div class="value">${subject || "No Subject"}</div>
                  </div>
                  <div class="field">
                    <div class="label">Message</div>
                    <div class="message-box">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This message was sent from your My Portfolio contact form.</p>
                  <a href="https://ais-dev-n5gkz33egtrm3rgqq3c7aa-192314957409.asia-east1.run.app" class="btn">View Portfolio</a>
                </div>
              </div>
            </body>
          </html>
        `,
        replyTo: email,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email", details: error instanceof Error ? error.message : String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
