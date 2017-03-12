var keys = require("./keys")
var CONFIG = {
    "DB":keys.DB,
    "SERVER":{
        "PORT":8080
    },
    "API":{
        "LIMIT":10,
        "VERSION":1,
    }
}
module.exports = CONFIG;