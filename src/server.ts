import http from "http"

export
type app_t = (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => void

export
type router_t = (
  app_map: Map <string, app_t>,
  req: http.IncomingMessage,
  res: http.ServerResponse,
) => void

export
function start (
  port: number,
  router: router_t,
  app_map: Map <string, app_t>,
) {
  let server = http.createServer ()
  server.on ("request", (
    req: http.IncomingMessage,
    res: http.ServerResponse,
  ) => {
    let date = new Date ()
    console.log (`[info] ${req.method} "${req.url}" at ${date}`)
    router (app_map, req, res)
  })
  server.listen (port)
  console.log (`[info] the story begins at ${port}`)
}

export
function default_router (
  app_map: Map <string, app_t>,
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  let app = app_map.get (req.url || "undefined")
  if (app) {
    app (req, res)
  } else {
    res.writeHead (200, {"Content-Type": "text/plain"})
    res.write ("undefined page")
    res.end ()
  }
}
