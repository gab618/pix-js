const Pix = require("./Pix");
const pix = new Pix(
  ">CHAVE PIX<",
  ">DESCRIÇÃO DO PAGAMENTO<",
  ">NOME DO BENEFICIADO<",
  ">CIDADE<",
  ">TXID<",
  5.5
);

const payload = pix.getPayload();
