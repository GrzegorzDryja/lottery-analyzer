import { Router, RouterContext } from './dependencies.ts';
import * as draws from './models/draws.ts';
import { checkCombination, checkDeepCombination } from './models/combo.ts';

const router = new Router();

router
  .get('/draws', (ctx: RouterContext) => {
    ctx.response.body = draws.filteredDraws;
  })
  .get('/check/:_shouldBeOnlyArrayOfNumbers', (ctx: RouterContext) => {
    if (ctx.params._shouldBeOnlyArrayOfNumbers) {
      ctx.response.body = checkCombination(ctx.params._shouldBeOnlyArrayOfNumbers.split(',').map((number: string) => Number(number)));
    }
  })
  .get('/checkDeep/:_shouldBeOnlyArrayOfNumbers', (ctx: RouterContext) => {
    if (ctx.params._shouldBeOnlyArrayOfNumbers) {
      ctx.response.body = checkDeepCombination(ctx.params._shouldBeOnlyArrayOfNumbers.split(',').map((number: string) => Number(number)));
    }
  });

export default router;
