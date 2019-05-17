function route (pathname, app_map, req, res) {
  if (app_map.has (pathname)) {
    let app = app_map.get (pathname)
    app (req, res)
  } else {
    res.writeHead (200, {"Content-Type": "text/plain"})
    res.write ("undefined page")
    res.end ()
  }
}

module.exports = {
  route
}
