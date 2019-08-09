var express = require('express');
var app = express();
app.use(express.static(__dirname )); //__dir and not _dir

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

