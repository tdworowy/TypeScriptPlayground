enum Country {
  England,
  German,
  Poland,
}
interface IFootballClub {
  getName(): string;
  getHomeCountry(): Country;
}
abstract class FootballClub implements IFootballClub {
  protected _name: string = "";
  protected _homeCountry: Country = 0;
  getName() {
    return this._name;
  }
  getHomeCountry() {
    return this._homeCountry;
  }
}
class Liverpool extends FootballClub {
  constructor() {
    super();
    this._name = "Liverpool F.C.";
    this._homeCountry = Country.England;
  }
}
class BorussiaDortmund extends FootballClub {
  constructor() {
    super();
    this._name = "Borussia Dortmund";
    this._homeCountry = Country.German;
  }
}
class RowRybnik extends FootballClub {
  constructor() {
    super();
    this._name = "ROW 1964 Rybnik ";
    this._homeCountry = Country.Poland;
  }
}
interface IFootballClubPrinter<T extends IFootballClub> {
  print(arg: T): void;
}
class FootballPrinter<T extends IFootballClub>
  implements IFootballClubPrinter<T>
{
  print(arg: T) {
    console.log(`Name: ${arg.getName()}`);
    console.log(`Country: ${Country[arg.getHomeCountry()]}`);
  }
}
//without generics, simpler version
class FootballPrinterSimple {
  static print(arg: IFootballClub) {
    console.log(`Name: ${arg.getName()}`);
    console.log(`Country: ${Country[arg.getHomeCountry()]}`);
  }
}

let liverpool: FootballClub = new Liverpool();
let borussiaDortmund: FootballClub = new BorussiaDortmund();
let rowRybnik: FootballClub = new RowRybnik();
let printer: FootballPrinter<FootballClub> = new FootballPrinter();

printer.print(liverpool);
printer.print(borussiaDortmund);
printer.print(rowRybnik);

FootballPrinterSimple.print(liverpool);
FootballPrinterSimple.print(borussiaDortmund);
FootballPrinterSimple.print(rowRybnik);
