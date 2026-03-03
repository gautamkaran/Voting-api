import nodemailer from "nodemailer";

/**
 * @name sendEmail 
 * @description This method is used to send email to the user
 * @param {string} receiverEmail // email of the receiver 
 * @param {string} subject // subject of the email
 * @param {string} htmlBody // Email HTML body content
 * @returns {Promise<void>} // Returns messageId if successful,otherwise throws an error
 * */
export const sendEmail = async (receiverEmail, subject, htmlBody) => {
  try {
    // Create transporter (Gmail SMTP configuration)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Voting System" <${process.env.EMAIL_ID}>`,
      to: receiverEmail,
      subject: subject,
      html: htmlBody,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);
    return info.messageId;

  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
};
