import * as server from "./server"

import * as ctrl from "./control"

server.start (3000, server.default_router, new Map ([
  ["/", ctrl.index],
  ["/up", ctrl.up],
]))
