import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: "buzon@bybconsultingtraining.com",
        pass: "88L5 s8ah q6TN",
    //   user: process.env.user,
    //   pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: "buzon@bybconsultingtraining.com",
      to: 'buzon@bybconsultingtraining.com',
      subject: `Envío de formulario de buzon de quejas y sugerencias de ${name}`,
      html: `<p>Tiene un nuevo envío de mensaje del buzon de quejas y sugerencias</p><br>
      <p><strong>Nombre: </strong> ${name} </p><br>
      <p><strong>Teléfono : </strong> ${phone} </p><br>
      <p><strong>Correo electrónico : </strong> ${email} </p><br>
      <p><strong>Mensaje: </strong> ${message} </p><br>
      
      `,
    });

    console.log('Message Sent', emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};