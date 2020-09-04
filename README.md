# multimulti-analyser

MultiMulti is a polish national lottery game. This app, can check if configuration of numbers have been drawn lots in past beside showing last results in different ways.


Too start server and app:
> deno run --allow-read --allow-net --allow-env ./server/mod.ts

Too bundle js:
> deno bundle -c ./public/src/tsconfig.json ./public/src/mod.ts ./public/dist/main.js

Too build angular (from angular folder):
> npm run build --prod
