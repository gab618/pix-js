const Pix = require("./Pix");
const pix = new Pix(
  "emgail@email.com",
  "Pagamento doido",
  "Gabriel Blindado",
  "SAO PAULO",
  "777",
  22
);

pix.getPayload();
