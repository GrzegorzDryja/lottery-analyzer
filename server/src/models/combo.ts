import { draws } from "./draws.ts";
import { Result } from "./interface.ts";

let i = 0;

function checkCombo(element: Result, numbers: number[]): string | void{
  let bool: boolean[] = [];
  let pool: string[] = [];

  for (let i=0; i<=numbers.length; i++){
    if(Object.values(element).includes(`${numbers[i]}`)){
      bool.push(true)
    }
  }

  if(bool.length === numbers.length){
    i++;
    console.log(`${i} zwycięskie losowanie nr ${element["Numer"]} z dnia ${element["Dzien"]}-${element["Miesiac"]}-${element["Rok"]}`);
  }
  
  return;
}


export function checkCombination(a: number[]) {
  
  draws.forEach((element: any) => {
    checkCombo(element, a)
  });

}