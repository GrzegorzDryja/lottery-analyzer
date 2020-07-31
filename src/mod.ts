async function readFile() {
  const wyniki = await Deno.readTextFile("../data/wyniki.csv");

  console.log(wyniki);
}

await readFile();
