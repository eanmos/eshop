var fs = require('fs')
var express = require('express')
var logger = require('morgan')
var http = require('http')
var https = require('https')

// Get SSL credentials.
//
// Here is how we made Express to work with Let's Encrypt certificate.
// https://community.letsencrypt.org/t/node-express-server-pem-read-bio-no-start-line/41175
const privkey = fs.readFileSync('ssl/privkey.pem', 'utf8')
const cert = fs.readFileSync('ssl/cert.pem', 'utf8')
const chain = fs.readFileSync('ssl/chain.pem', 'utf8')
const credentials = { key: privkey, cert: cert, ca: chain }

// Static paths.
const ROOT = `${__dirname}/public`
const INDEX = `${ROOT}/index.html`

const app = express()

// Redirect from HTTP to HTTPS.
app.all('*', function ensureSecure(req, res, next) {
  if (req.secure)
    return next()

  res.redirect('https://' + req.hostname + req.url)
})

// Log the requests.
app.use(logger('dev'))

// Send static files.
app.use(express.static(ROOT))

// Make ReactJS routers work.
app.get('/*', (req, res) => res.sendFile(INDEX))

http.createServer(app).listen(80)
https.createServer(credentials, app).listen(443)
