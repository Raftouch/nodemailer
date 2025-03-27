const nodeMailer = require("nodemailer");

const html = `
    <h1>Hello</h1>
    <p>Today is a beautiful day</p>
`;

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
      to: "test_2@test.com",
      subject: "Testing test",
      html: html,
    });
    console.log("Message sent : ", info.messageId);
  } catch (error) {
    console.log("Error sending email: ", error);
  }
};

start();
