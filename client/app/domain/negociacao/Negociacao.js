// client/app/domain/negociacao/Negociacao.js

class Negociacao {

  constructor(data, quantidade, valor) {
    this._data = data; // data atual
    this._quantidade = quantidade;
    this._valor = valor;
  }

  getVolume() {
    return this._quantidade * this._valor;
  }

  getData(){
    return this._data;
  }

  getQuantidade(){
    return this._quantidade;
  }

  getValor(){
    return this._valor;
  }
}