import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

async function loadResults() {
  const file = await Deno.open("./data/wyniki.csv");
  const bufReader = new BufReader(file);
  const result = await parse(bufReader, {
    header: true,
    comma: ";"
  });
  Deno.close(file.rid); //Remember of that to awoid memory leak

  console.log(result[22]);
}

await loadResults();
