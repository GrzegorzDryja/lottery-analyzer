// Standard library dependencies
export * as log from 'https://deno.land/std@0.216.0/log/mod.ts';
export { BufReader } from 'https://deno.land/std@0.216.0/io/buf_reader.ts';
export { join } from 'https://deno.land/std@0.216.0/path/mod.ts';
export { parse } from 'https://deno.land/std@0.158.0/encoding/csv.ts';

// Third party dependencies
export { Application, Router, Context, send } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
export type { RouterContext } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
export { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';

//Global const data
export const CSV_RESOURCE = {
  multi: 'https://www.multipasko.pl/wyniki-csv.php?f=multimulti-sortowane',
  mini: 'https://www.multipasko.pl/wyniki-csv.php?f=minilotto-sortowane',
};
export const CSV_MINI_RESULTS_PATH = './data/mini/results.csv';
export const CSV_MINI_PREDICTION_PATH = './data/mini/predictions.csv';

export const DATA_PATH = './data';
export const RESULTS_FILE_NAME = 'results.csv';
export const PREDICTIONS_FILE_NAME = 'predictions.csv';
