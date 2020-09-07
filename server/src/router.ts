import { Router } from "./dependenices.ts";
import * as draws from "./models/draws.ts";
import { checkCombination } from "./models/combo.ts";

const router = new Router();

router
  // .get("/", (ctx) => {
  //   ctx.response.body = 
  // })
  .get("/draws", (ctx) => {
    ctx.response.body = draws.filteredDraws
  })
  .get("/draws/:numbers", (ctx: any = {}) => {
    ctx.response.body = checkCombination(ctx.params.numbers.split(",").map((s: string) => +s));
  });

export default router;
