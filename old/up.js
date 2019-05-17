let fs = require ("fs")

let formidable = require ("formidable")

function up (req, res) {
  let form = new formidable.IncomingForm ()
  form.parse (req, (error, fields, files) => {
    res.writeHead (200, {"Content-Type": "text/html"})
    let path = files.up.path
    show (req, res, path)
  })
}

function show (_req, res, path) {
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

module.exports = {
  exe: up
}
