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
  attributes: Attributes;
}

export class Meta {
  total: Number;
  pages: Number;
}

class Links {
  first: String;
  previous: String;
  next: String;
  last: String;
}

export class DataCurrencies{
  data: Array<Currency>;
  meta: Meta;
  links: Links;
}
export class DataCurrency{
  data: Currency;
  currency(){
    this.data = new Currency();
  }
}
