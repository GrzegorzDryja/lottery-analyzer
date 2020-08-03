import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { join } from "http://deno.land/std/path/mod.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

interface Result {
  [ key: string ]: string
}

const draws = await loadResults();
const filteredDraws = filterDraws(draws, 31, 31, 7, 2020);

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

function filterDraws(results: Result[], day1: number, day2: number, month: number, year: number){
  const filteredDraws = results.filter((result: Result) => {
    const dzien = +result["Dzien"];
    const miesiac = +result["Miesiac"];
    const rok = +result["Rok"];

    return rok == year && miesiac == month && dzien >= day1 && dzien <= day2;
  })
  return filteredDraws;
};

function checkCombo(element: Result, numbers: number[]){
  let bool: boolean[] = []

  for (let i=0; i<=numbers.length; i++){
    if(Object.values(element).includes(`${numbers[i]}`)){
      bool.push(true)
    }
  }

if(bool.length === numbers.length){
  console.log(`Zwycięskie losowanie nr ${element["Numer"]} z dnia ${element["Dzien"]}-${element["Miesiac"]}-${element["Rok"]}`);
  return true;
  }
  return false;
}

// await downloadDraws();

const hmm = draws.forEach(element => {
  checkCombo(element, [9, 12, 17, 22, 29])
});

console.log(hmm);
