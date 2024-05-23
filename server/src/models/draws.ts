import { CSV_MINI_RESULTS_PATH, CSV_RESOURCE, DATA_PATH, RESULTS_FILE_NAME, } from '../dependencies.ts';
import { Game, MultiMulitResult, Result } from './interface.ts';

export const draws = await loadResultsFromFile();

async function downloadDraws(game: Game) {
  const urlToFile = await fetch(CSV_RESOURCE[game]);
  saveToFile(urlToFile, game);
}

async function saveToFile(urlToFile: Response, game: Game): Promise<void> {
  const csv = new Uint8Array(await urlToFile.arrayBuffer());
  await Deno.writeFile(`${DATA_PATH}/${game}/${RESULTS_FILE_NAME}`, csv);
}

async function loadResultsFromFile(): Promise<MultiMulitResult[]> {
  const file = await Deno.open(CSV_MINI_RESULTS_PATH, { read: true });
  const draws = await Deno.readTextFile(CSV_MINI_RESULTS_PATH);
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

export function filterDraws(results: MultiMulitResult[], limit: number): MultiMulitResult[] {
  const filteredDraws = results.filter((result: Result) => {
    const nr = +result['Numer'];

    return nr >= results.length - limit;
  });
  return filteredDraws;
}

await downloadDraws('mini');
