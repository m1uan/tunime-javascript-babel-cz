export class Auto {
  constructor(znacka){
    this._znacka = znacka;
  }

  toString(){
  	return 'Auto::' + this._znacka;
  }
}

export default class Zavodak extends Auto {
  constructor(znacka, maximalka){
    super(znacka);
    this._upravy = 'Nove';
    this._maximalka = maximalka;
  }
  
  get maximalka(){
      return this._maximalka;
  }

  set maximalka(maximalka){
  	this._upravy = 'Upraveno';
  	this._maximalka = maximalka;
  }

  setGumy(gumy){
    this.gumy = gumy;
  }

  toString(){
  	return super.toString() + ' Maximalka::' + this._maximalka + ' Stav:: ' + this._upravy;
  }
}

export const GUMY = {
  sucho: {},
  mokro: {},
  snih : {}
}