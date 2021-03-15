import { log, Application, send, Context, oakCors } from "./src/dependenices.ts";
import router from "./src/router.ts";

// Setup application logger
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  }
});

const PORT = Number(Deno.env.get("PORT")) || 8000;

const app = new Application();

//Error handler middleware
// app.use(async (ctx: Context) => {
//   try {
//     await next();
//   } catch (err) {
//     ctx.response.body = "Internal server error";
//     log.error(err);
//   }
// });

// Serve RESTful API
app.use(oakCors({
  origin: "http://localhost:4200"
}))
app.use(router.routes());
app.use(router.allowedMethods());


// Serve static files
app.use(async (ctx: Context) => {
  const filePath = ctx.request.url.pathname;
  log.info(`Requesting ${filePath}`);
  if ([
    "/index.html",
    "/favicon.ico",
    "/main.js",
    "/main.js.map",
    "/polyfills.js",
    "/polyfills.js.map",
    "/runtime.js",
    "/runtime.js.map",
    "/styles.js",
    "/styles.js.map",
    "/vendor.js",
    "/vendor.js.map"
  ].includes(filePath)) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/public/dist`,
      index: "index.html",
  })}
});

if (import.meta.main) {
  log.info(`Starting server on port ${PORT}...`);
  await app.listen({
    port: PORT
  });
}
