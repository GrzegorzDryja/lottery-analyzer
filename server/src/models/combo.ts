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

function removeFirstFourObjectParams(element: any){

  let trimedElement: any;
  
  trimedElement = {
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
    L20: element.L20
  };

  return trimedElement;
}

export function checkCombination(a: number[]): any {

  let checked = new Array();
  let i = 0;

  draws.forEach((element: any) => {
      if(checkCombo(removeFirstFourObjectParams(element), a)){
        checked.push(element)
      }
    })

  return checked;
}
