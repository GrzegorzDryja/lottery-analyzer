import { Context, Router } from "./dependenices.ts";
import * as draws from "./models/draws.ts";

const router = new Router();

router.get("/", (context: Context) => {
  context.response.body = "In develop..."
})

router.get("/draws", (context: Context) => {
  context.response.body = draws.filteredDraws;
})

export default router;
