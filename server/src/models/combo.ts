import { draws } from './draws.ts';
import { DeepWins, DeepResults } from './interface.ts';
import { MultiMulitResult, MultiMulti } from './interface.ts';

function checkCombo(element: MultiMulti, numbers: number[]): boolean {
  const isCombo: boolean[] = [];

  if (!Array.isArray(numbers)) return false;

  numbers.forEach((number) => {
    if (Object.values(element).includes(number)) {
      isCombo.push(true);
    }
  });

  if (isCombo.length === numbers.length) {
    return true;
  }

  return false;
}

//TODO: L1 - L20 is limited only to multi-multi 20 numbers
function onlyNumbers<T>(element: MultiMulitResult): T {
  return {
    L1: element.L1,
    L2: element.L2,
    L3: element.L3,
    L4: element.L4,
    L5: element.L5,
    L6: element.L6,
    L7: element.L7,
    L8: element.L8,
    L9: element.L9,
    L10: element.L10,
    L11: element.L11,
    L12: element.L12,
    L13: element.L13,
    L14: element.L14,
    L15: element.L15,
    L16: element.L16,
    L17: element.L17,
    L18: element.L18,
    L19: element.L19,
    L20: element.L20,
  } as T;
}

export function checkCombination(numbers: number[]): DeepResults[] {
  const checked: DeepResults[] = [];

  draws.forEach((result) => {
    if (checkCombo(onlyNumbers<MultiMulti>(result), numbers)) {
      checked.push({ ...result, winnerSet: numbers });
    }
  });

  return checked;
}

export function checkDeepCombination(numbers: number[]): DeepWins {
  const deepWins: DeepWins = {
    firstDegreeWin: [],
    secondDegreeWin: [],
    thirdDegreeWin: [],
  };

  deepWins.firstDegreeWin = checkCombination(numbers);

  //To jakieś brzydkie bardzo jest ani DRY jakieś ani performance mega jakiś, dużo pozostałości w pamięci pozostaje
  //I optymalizacja bardziej generyczna by się przydała
  //Pozostaje jeszcze problem sprawdzania piątek, czwórek, trójek, wielokrotnie - znaczy trójki będą wszystkie powielone jak piątka wpadnie
  //Przerefaktorować operacje na arraykach na świeżym umyśle

  const czworki = getCombination(numbers);
  czworki.forEach((czworka) => {
    const checked = checkCombination(czworka);
    if (checked.length === 0) return;

    deepWins.secondDegreeWin.push(...checked);
  });

  const trojki = czworki.map((czworka) => getCombination(czworka));
  trojki.forEach((trojka) => {
    //Trojki się powtarzają i jest to ararjka arajek
    trojka.forEach((trzy) => {
      const checked = checkCombination(trzy);
      if (checked.length === 0) return;

      deepWins.thirdDegreeWin.push(...checked);
    });
  });

  deepWins.thirdDegreeWin.sort((a, b) => b.Rok - a.Rok);
  deepWins.secondDegreeWin.sort((a, b) => b.Rok - a.Rok);

  return deepWins;
}

// function getSetOfFives(numbers: number[]): number[] {
//   if (numbers.length === 5) {
//     return numbers
//   }

//   return getSetOfFives(getCombination(numbers))

// }

function getCombination(numbers: number[]): number[][] {
  const combinations: number[][] = [];
  numbers.forEach((_, index) => {
    combinations.push(numbers.toSpliced(index, 1));
  });

  return combinations;
}
