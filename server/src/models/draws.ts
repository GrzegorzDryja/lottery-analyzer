import { CSV_PATH, CSV_RESOURCE } from '../dependencies.ts';
import { MultiMulitResult, Result } from './interface.ts';

export const draws = await loadResultsFromFile();
export const filteredDraws = filterDraws(draws);

async function downloadDraws() {
  const urlToFile = await fetch(CSV_RESOURCE);
  saveToFile(urlToFile);
}

async function saveToFile(urlToFile: Response): Promise<void> {
  const csv = new Uint8Array(await urlToFile.arrayBuffer());
  await Deno.writeFile(CSV_PATH, csv);
}

async function loadResultsFromFile(): Promise<MultiMulitResult[]> {
  const file = await Deno.open(CSV_PATH, { read: true });
  const draws = await Deno.readTextFile(CSV_PATH);
  file.close();

  return transformCSV(draws);
}

function transformCSV(draws: string): MultiMulitResult[] {
  const drawsArray = draws.split('\n');
  const headers = drawsArray.shift()?.split(';');
  const drawArray = drawsArray.map((result) => result.split(';'));
  const multiMultiResults: MultiMulitResult[] = drawArray.map((result) =>
    result.reduce((prev, curr, index) => {
      if (headers === undefined) return { ...prev };
      return { ...prev, [headers[index]]: Number(curr) };
    }, {} as MultiMulitResult)
  );

  return multiMultiResults;
}

function filterDraws(results: MultiMulitResult[]): MultiMulitResult[] {
  const LAST = 19
  const filteredDraws = results.filter((result: Result) => {
    const nr = +result['Numer'];

    return nr >= results.length - LAST;
  });
  return filteredDraws;
}

await downloadDraws();
