import * as server from "./server"

import * as main from "./main"
import * as up from "./up"

server.start (3000, server.default_router, new Map ([
  ["/", main.app],
  ["/up", up.app],
]))
