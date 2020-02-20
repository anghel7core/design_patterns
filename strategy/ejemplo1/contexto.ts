import { Algoritmo } from "./algoritmo.interface";

export class Contexto {

  private algoritmo: Algoritmo;

  constructor(algoritmo: Algoritmo) {
    this.algoritmo = algoritmo;
  }

  public ejecutarEstrategia(lista: number[]): number[] {
    return this.algoritmo.ordenar(lista);
  }

  public setAlgoritmo(algoritmo: Algoritmo): void {
    this.algoritmo = algoritmo;
  }

}