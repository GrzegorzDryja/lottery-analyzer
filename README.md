# multimulti-analyser

MultiMulti is a polish national lottery game. This Angular app with Deno backend will show you latest draws in two different ways and also can check if configuration of your numbers have been drawn lots in past.

Too start server and app run this command in terminal:
> deno run --allow-read --allow-net --allow-env --allow-write ./server/mod.ts

App creates two csv files in data folder. One is downloaded from page ..., second is use for your combinations.

Check your localhost page.
Login and check if you ever could won!



Too bundle js:
> deno bundle -c ./public/src/tsconfig.json ./public/src/mod.ts ./public/dist/main.js

Too build angular (from angular folder):
> npm run build --prod
