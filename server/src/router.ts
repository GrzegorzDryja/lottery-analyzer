import { Router, RouterContext } from "./dependenices.ts";
import * as draws from "./models/draws.ts";
import { checkCombination } from "./models/combo.ts";

const router = new Router();

router
  // .get("/", (ctx: RouterContext) => {
    
  // })
  .get("/draws", (ctx: RouterContext) => {
    ctx.response.body = draws.filteredDraws
  })
  .get("/check/:_shouldBeOnlyArrayOfNumbers", (ctx: RouterContext) => {
    if(ctx.params._shouldBeOnlyArrayOfNumbers){
      ctx.response.body = checkCombination(ctx.params._shouldBeOnlyArrayOfNumbers.split(",").map((s: string) => +s))
    }
  });

export default router;
