let server = require ("./server")
let router = require ("./router")

let app_map = new Map ([
  ["/", require ("./main") .exe],
  ["/up", require ("./up") .exe],
])

server.start (3000, router.route, app_map)
