const nodemailer=require("nodemailer")

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b4607b08424fa9",
      pass: "7170f38d1d771f"
    }
  });

  module.exports= transport