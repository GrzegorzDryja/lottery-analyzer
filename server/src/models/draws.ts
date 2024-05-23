import { Status } from 'https://deno.land/std@0.61.0/http/http_status.ts';
import { CSV_MINI_RESULTS_PATH, CSV_RESOURCE, DATA_PATH, RESULTS_FILE_NAME, CSV_MINI_PREDICTION_PATH } from '../dependencies.ts';
import { Prediction } from './interface.ts';
import { Game, MultiMulitResult, Result } from './interface.ts';

export const draws = await loadResultsFromFile();

export async function addPredictions(prediction: Prediction): Promise<Status> {
  //TODO: This could be handled by some kind of state mini/multi
  const predictionsCSVText = await Deno.readTextFile(CSV_MINI_PREDICTION_PATH);
  const updatedPredictionsCSVText = predictionsCSVText.concat(
    String(prediction.drawNumber),
    ';',
    prediction.numbers.toString().replaceAll(',', ';'),
    '\n'
  );
  return await Deno.writeTextFile(CSV_MINI_PREDICTION_PATH, updatedPredictionsCSVText)
    .then(() => Status.OK);
}

async function downloadDraws(game: Game) {
  const urlToFile = await fetch(CSV_RESOURCE[game]);
  saveToFile(urlToFile, game);
}

async function saveToFile(urlToFile: Response, game: Game): Promise<void> {
  const csv = new Uint8Array(await urlToFile.arrayBuffer());
  await Deno.writeFile(`${DATA_PATH}/${game}/${RESULTS_FILE_NAME}`, csv);
}

async function loadResultsFromFile(): Promise<MultiMulitResult[]> {
  //TODO: To nie działa jak nie ma pliku w folderze, trzeba będzie naprawić
  const file = await Deno.open(CSV_MINI_RESULTS_PATH, { read: true });
  const results = await Deno.readTextFile(CSV_MINI_RESULTS_PATH);

  file.close();

  return transformCSV(results);
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
