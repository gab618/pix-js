<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gab618/bolao-cblol-frontend">
    <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-bc-logo-1.png" alt="Logo" width="215" height="76">
  </a>

  <h3 align="center">pix-js</h3>

  <p align="center">
    Classe que gera um código pix estático pagável
    <br />

  </p>
</p>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

Se você precisa criar um QR code pix usando Javascript, essa classe pode te ajudar. Conteúdo baseado na [versão em PHP do William Costa](https://github.com/william-costa/wdev-qrcode-pix-estatico-php).

## Objetivos do projeto

- [x] Aprender sobre o PIX
- [x] Gerar códigos PIX personalizados
- [x] Praticar classes no javascript

## Exemplo

Exemplo da criação de um código no valor de R$ 5,50

```js
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
```

O conteúdo do payload deve ser algo como a string abaixo. Agora basta inserir essa string em um QR code da forma que for mais conveniente.

`00020126610014br.gov.bcb.pix0111>CHAVE PIX<0224>DESCRIÇÃO DO PAGAMENTO<52040000530398654045.505802BR5921>NOME DO BENEFICIADO<6008>CIDADE<62100506>TXID<6304A2F7`

## Contact

Gabriel - [@ezrealblindado](https://twitter.com/ezrealblindado) - gabrielrocha1997@gmail.com
