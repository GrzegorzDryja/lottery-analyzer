import { draws } from "./draws.ts";
import { Result } from "./interface.ts";

function checkCombo(element: Result, numbers: number[]): boolean {
  let bool: boolean[] = [];
  let pool: string[] = [];
  let j = 0;

  for (let i=0; i<=numbers.length; i++){
    if(Object.values(element).includes(`${numbers[i]}`)){
      bool.push(true)
    }
  }

  if(bool.length === numbers.length){
    return true;
  }
  return false;
}

export function checkCombination(a: number[]): any {

  let checked = new Array();
  let i = 0;
  draws.forEach((element: any) => {
      if(checkCombo(element, a)){
        checked.push(element)
        console.log(i++)
      }
    })

  return checked;
}
