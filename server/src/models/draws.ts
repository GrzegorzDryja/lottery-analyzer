import { BufReader, join, parse } from "../dependenices.ts";
import { Result } from "./interface.ts";

export const draws = await loadResults();
export const filteredDraws = filterDraws(draws);
const date = new Date();
const today = date.getDay()
const month = date.getMonth();

async function downloadDraws(){
  const urlToFile = await fetch('https://www.multipasko.pl/wyniki-csv.php?f=multimulti-sortowane');
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
    lazyQuotes: true,
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

    return nr >= results.length-19;
  })
  return filteredDraws;
};

await downloadDraws();
//console.log(filteredDraws);

