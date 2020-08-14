import { Router } from "./dependenices.ts";
import * as draws from "./models/draws.ts";
import { checkCombination } from "./models/combo.ts";

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "In develop..."
  })
  .get("/draws", (ctx) => {
    ctx.response.body = draws.filteredDraws
  })
  .get("/draws/:numbers", (ctx: any = {}) => { //Grrrryyyy params works only with any object, Why? Why I can't reach params from Context? Ok - https://doc.deno.land/https/deno.land/x/oak/mod.ts#Context
  console.log(ctx); 
    checkCombination(ctx.params.numbers.split(",").map((s: string) => +s));
       ctx.response.body = "działa";
  });

// router.put()

export default router;
