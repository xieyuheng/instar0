let http = require ("http")
let url = require ("url")

function start (port, route, app_map) {
  let on_req = (req, res) => {
    let pathname = url.parse (req.url) .pathname
    let date = new Date ()
    console.log (`[info] ${req.method} "${pathname}" at ${date}`)
    route (pathname, app_map, req, res)
  }

  let server = http.createServer ()
  server.on ("request", on_req)
  server.listen (port)
  console.log (`[info] the story begins at ${port}`)
}

module.exports = {
  start
}
