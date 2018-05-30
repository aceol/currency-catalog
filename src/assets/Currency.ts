export class Attributes{
  code: String;
  name: String;
  symbol: String;
  category: String;
  currency_type: String;
  code_iso_numeric3: String;
  code_iso_alpha3: String;
}

export class Currency{
  id: String;
  attributes: Attributes
}

export class DataCurrencies{
  data: Array<Currency>;
}
export class DataCurrency{
  data: Currency;
}
