import { log, Application, send } from "./src/dependenices.ts";
import api from "./src/api.ts";

// Setup application logger
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  }
});

const PORT = Number(Deno.env.get("PORT")) || 8000;

const app = new Application();

// Error handler middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.body = "Internal server error";
    log.error(err);
  }
});

// Serve RESTful API
app.use(api.routes());
app.use(api.allowedMethods());

// Serve static files
app.use(async (context) => {
  const filePath = context.request.url.pathname;
  log.info(`Requesting ${filePath}`);
  if (["/index.html", "/main.js", "/main.css", "/images/favicon.png"].includes(filePath)) {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/public/dist`,
    });
  }
});

if (import.meta.main) {
  log.info(`Starting server on port ${PORT}...`);
  await app.listen({
    port: PORT
  });
}
