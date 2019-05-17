module.exports = {
  exe: (_req, res) => {
    let body =
        `<html>`+
        `<head>`+
        `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`+
        `</head>`+
        `<body>`+
        `<form action="/up" enctype="multipart/form-data" method="post">`+
        `<input type="file" name="up" />`+
        `<input type="submit" value="Upload" />`+
        `</form>`+
        `</body>`+
        `</html>`
    res.writeHead (200, {"Content-Type": "text/html"})
    res.write (body)
    res.end ()
  }
}
