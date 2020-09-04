type Context {
  app: EventTarget { handle: [AsyncFunction], proxy: false, state: {} },
  state: {},
  request: Request {},
  respond: true,
  response: Response {},
  cookies: Cookies {},
  matched: [
    Layer {
      name: undefined,
      methods: [ "HEAD", "GET" ],
      stack: [ [Function] ],
      path: "/draws/:numbers"
    }
  ],
  router: Router {},
  captures: [ "1,4,12,25,33" ],
  params: { numbers: "1,4,12,25,33" },
  routeName: undefined
}
