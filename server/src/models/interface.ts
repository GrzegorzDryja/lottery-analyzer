export type Game = 'multi' | 'mini'

export type MultiMulitResult = MultiMulti & Result;

export interface DeepResults extends MultiMulitResult {
  winnerSet: number[]
}

export interface DeepWins {
  firstDegreeWin: DeepResults[];
  secondDegreeWin: DeepResults[];
  thirdDegreeWin: DeepResults[];
}

export interface MultiMulti {
    L1: number;
    L2: number;
    L3: number;
    L4: number;
    L5: number;
    L6: number;
    L7: number;
    L8: number;
    L9: number;
    L10: number;
    L11: number;
    L12: number;
    L13: number;
    L14: number;
    L15: number;
    L16: number;
    L17: number;
    L18: number;
    L19: number;
    L20: number;
}

export interface Result {
  Numer: number;
  Dzien: number;
  Miesiac: number;
  Rok: number;
}

export interface Prediction {
  drawNumber: Result["Numer"]
  numbers: number[]
}
