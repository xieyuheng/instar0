import http from "http"
import fs from "fs"

import formidable from "formidable"

export
function app (
  req: http.IncomingMessage,
  res: http.ServerResponse,
) {
  let form = new formidable.IncomingForm ()
  form.parse (req, (
    _err: any,
    fields: formidable.Fields,
    files: formidable.Files,
  ) => {
    res.writeHead (200, {"Content-Type": "text/html"})
    let path = files.up.path
    show (req, res, path)
  })
}

function show (
  _req: http.IncomingMessage,
  res: http.ServerResponse,
  path: string,
) {
  fs.readFile (path, "binary", (error, file) => {
    if (error) {
      res.writeHead (500, {"Content-Type": "text/plain"})
      res.write (error + "\n")
      res.end ()
    } else {
      res.writeHead (200, {"Content-Type": "image/png"})
      res.write (file, "binary")
      res.end ()
    }
  })
}
