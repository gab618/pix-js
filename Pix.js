module.exports = class Pix {
  constructor(pixKey, description, merchantName, merchantCity, txid, amount) {
    this.pixKey = pixKey;
    this.description = description;
    this.merchantName = merchantName;
    this.merchantCity = merchantCity;
    this.txid = txid;
    this.amount = amount.toFixed(2);

    this.ID_PAYLOAD_FORMAT_INDICATOR = "00";
    this.ID_MERCHANT_ACCOUNT_INFORMATION = "26";
    this.ID_MERCHANT_ACCOUNT_INFORMATION_GUI = "00";
    this.ID_MERCHANT_ACCOUNT_INFORMATION_KEY = "01";
    this.ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION = "02";
    this.ID_MERCHANT_CATEGORY_CODE = "52";
    this.ID_TRANSACTION_CURRENCY = "53";
    this.ID_TRANSACTION_AMOUNT = "54";
    this.ID_COUNTRY_CODE = "58";
    this.ID_MERCHANT_NAME = "59";
    this.ID_MERCHANT_CITY = "60";
    this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE = "62";
    this.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID = "05";
    this.ID_CRC16 = "63";
  }

  teste() {
    console.log(this.pixKey);
    console.log(this.description);
    console.log(this.merchantName);
    console.log(this.merchantCity);
    console.log(this.txid);
    console.log(this.amount);
  }
};
