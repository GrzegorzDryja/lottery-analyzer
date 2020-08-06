import { BufReader, join, parse } from "../dependenices.ts";

interface Result {
  [ key: string ]: string
}

const draws = await loadResults();
const date = new Date();
const today = date.getDay()
const month = date.getMonth();
export const filteredDraws = filterDraws(draws);

async function downloadDraws(){
  const urlToFile = await fetch("https://www.multipasko.pl/wyniki-csv.php?f=multimulti-sortowane");
  const csv = new Uint8Array(await urlToFile.arrayBuffer());
  const path = join("data", "wyniki.csv");
  await Deno.writeFile(path, csv);
}

async function loadResults() {
  const path = join("data", "wyniki.csv");
  const file = await Deno.open(path);
  const bufReader = new BufReader(file);
  const draws = await parse(bufReader, {
    header: true,
    comma: ";"
  });
  Deno.close(file.rid); //Remember of that to awoid memory leak

  return draws as Array<Result>;
}

function filterDraws(results: Result[]){
  const filteredDraws = results.filter((result: Result) => {
    const dzien = +result["Dzien"];
    const miesiac = +result["Miesiac"];
    const rok = +result["Rok"];
    const nr = +result["Numer"]

    return nr >= results.length-20;
  })
  return filteredDraws;
};

console.log(filteredDraws);

let i = 0;

function checkCombo(element: Result, numbers: number[]): void{
  let bool: boolean[] = []

  for (let i=0; i<=numbers.length; i++){
    if(Object.values(element).includes(`${numbers[i]}`)){
      bool.push(true)
    }
  }

  if(bool.length === numbers.length){
    i++;
    console.log(`${i} zwycięskie losowanie nr ${element["Numer"]} z dnia ${element["Dzien"]}-${element["Miesiac"]}-${element["Rok"]}`);
  }
}

//await downloadDraws();

draws.forEach(element => {
  checkCombo(element, [6, 16, 17, 23, 24])
});
