const nodeMailer = require("nodemailer");

const html = `
    <h1>Hello</h1>
    <p>Today is a beautiful day</p>
    <img src="cid:unique@test.com" width="400">
`;

const emails = ["test_2@test.com", "test_3@test.com", "test_4@test.com"];

const start = async () => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "test@gmail.com",
      pass: "123456!",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: "TestUser <test@test.com>",
      to: emails,
      subject: "Testing test",
      html: html,
      attachments: [
        {
          filename: "dog.avif",
          path: "attachments/dog.avif",
          cid: "unique@test.com",
        },
        {
          filename: "violin.avif",
          path: "attachments/dog.avif",
        },
      ],
    });
    console.log("Message sent : ", info.messageId);
    console.log("Message sent : ", info.accepted);
    console.log("Message sent : ", info.rejected);
  } catch (error) {
    console.log("Error sending email: ", error);
  }
};

start();
