export class SafetyDocsMultimedia {

    public filename: String;
    public dodajActiveKlasu: Boolean;
    public putanja: any;
    public ekstenzija: String;
  
    constructor(nazivFajla="", DodajKlasu=true, Putanja=undefined, Ekstenzija="") {
      this.filename = nazivFajla;
      this.dodajActiveKlasu = DodajKlasu;
      this.putanja = Putanja;
      this.ekstenzija = Ekstenzija;
    }
}
