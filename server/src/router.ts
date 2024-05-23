import { Status } from 'https://deno.land/std@0.61.0/http/http_status.ts';
import { Router, RouterContext } from './dependencies.ts';
import { checkCombination, checkDeepCombination, getCombinations } from './models/combo.ts';
import { filterDraws, draws, addPredictions } from './models/draws.ts';

const router = new Router();

router
  .get('/draws', (ctx: RouterContext) => {
    const limit = ctx.request.url.searchParams.get('limit');

    if (limit) {
      ctx.response.body = filterDraws(draws, Number(limit));
    }
  })
  .get('/check/:_shouldBeOnlyArrayOfNumbers', (ctx: RouterContext) => {
    if (ctx.params._shouldBeOnlyArrayOfNumbers) {
      ctx.response.body = checkCombination(ctx.params._shouldBeOnlyArrayOfNumbers.split(',').map((number: string) => Number(number)));
    }
  })
  .get('/combinations/:_shouldBeOnlyArrayOfNumbers/:_limit', (ctx: RouterContext) => {
    const numbers = ctx.params._shouldBeOnlyArrayOfNumbers;
    const limit = Number(ctx.params._limit);
    if (numbers && limit && numbers.length > limit) {
      ctx.response.body = getCombinations(
        numbers.split(',').map((number: string) => Number(number)),
        limit
      );
    }
  })
  .get('/checkDeep/:_shouldBeOnlyArrayOfNumbers', (ctx: RouterContext) => {
    if (ctx.params._shouldBeOnlyArrayOfNumbers) {
      ctx.response.body = checkDeepCombination(ctx.params._shouldBeOnlyArrayOfNumbers.split(',').map((number: string) => Number(number)));
    }
  })
  .post('/predictions/:_shouldBeOnlyArrayOfNumbers', (ctx: RouterContext) => {
    const numbersString = ctx.params._shouldBeOnlyArrayOfNumbers;
    const drawNumber = Number(ctx.request.url.searchParams.get('draw'));

    if (numbersString && drawNumber) {
      const numbers = numbersString.split(',').map((number) => Number(number));

      return addPredictions({ drawNumber, numbers })
        .catch((error) => {
          ctx.response.body = { message: error };
        })
        .then((status) => {
          if (status) {    
            ctx.response.status = status;
            ctx.response.body = { message: 'OK' };
          }
        });
    }
  });

export default router;
