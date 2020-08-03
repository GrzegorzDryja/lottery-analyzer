import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { join } from "http://deno.land/std/path/mod.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

async function loadResults() {
  const path = join("data", "wyniki.csv");
  const file = await Deno.open(path);
  const bufReader = new BufReader(file);
  const result = await parse(bufReader, {
    header: true,
    comma: ";"
  });
  Deno.close(file.rid); //Remember of that to awoid memory leak

  return result;
}

const wyniki = await loadResults();
