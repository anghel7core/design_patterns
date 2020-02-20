import { Contexto } from "./contexto";
import { Algoritmo } from "./algoritmo.interface";
import { BubbleSort } from "./bubble-sort";
import { ShellSort } from "./shell-sort";
import { QuickSort } from "./quick-sort";

const algortimoBubbleSort: Algoritmo = new BubbleSort();
const algortimoQuickSort: Algoritmo = new QuickSort();
const algortimoShellSort: Algoritmo = new ShellSort();


const lista: number[] = [47,32,57,1,44,99,43,45,,1];
const contexto: Contexto = new Contexto(algortimoBubbleSort);
contexto.ejecutarEstrategia(lista);
contexto.setAlgoritmo(algortimoQuickSort);
contexto.ejecutarEstrategia(lista);