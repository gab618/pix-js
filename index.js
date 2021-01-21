const Pix = require("./Pix");
const pix = new Pix(
  "emgail@email.com",
  "Pagamento doido",
  "Gabriel Blindado",
  "SAO PAULO",
  "ID7777",
  22.1
);

const exemplo = pix.getPayload();
console.log(exemplo);
