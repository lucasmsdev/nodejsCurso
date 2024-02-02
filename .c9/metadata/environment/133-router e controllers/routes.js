{"changed":true,"filter":false,"title":"routes.js","tooltip":"/133-router e controllers/routes.js","value":"const express = require('express');\nconst route = express.Router();\nconst homeController = require('./controllers/homeController.js')\n\nroute.get('/', homeController.paginaInicial);\nroute.post('/', homeController.trataPost);\n\n\n\nmodule.exports = route;","undoManager":{"mark":87,"position":88,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["c"],"id":1},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["o"]},{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["n"]},{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["s"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":[" "],"id":2},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["e"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["x"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["p"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["r"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["e"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["s"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["s"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "],"id":3}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":[" "],"id":4},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["="]}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "],"id":5},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["="]}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":[" "],"id":6},{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["r"]},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["e"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["u"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["i"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"remove","lines":["r"],"id":7},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"remove","lines":["i"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"remove","lines":["u"]}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["q"],"id":8},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["u"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["i"]},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["r"]},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["e"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["9"]}],[{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"remove","lines":["9"],"id":9}],[{"start":{"row":0,"column":23},"end":{"row":0,"column":25},"action":"insert","lines":["()"],"id":10}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":26},"action":"insert","lines":["''"],"id":11}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["e"],"id":12},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["x"]},{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["p"]},{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["r"]},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["e"]},{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["s"]},{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":[";"],"id":13}],[{"start":{"row":0,"column":35},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["c"]},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["o"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["n"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["s"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":[" "],"id":15},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["r"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["o"]},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["u"]},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["t"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":[" "],"id":16},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":[" "],"id":17},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["e"]},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["x"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["p"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["r"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["e"]},{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["s"]},{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":[","],"id":18}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"remove","lines":[","],"id":19}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["."],"id":20},{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["R"]},{"start":{"row":1,"column":23},"end":{"row":1,"column":24},"action":"insert","lines":["o"]},{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":["u"]},{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["t"]},{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":["e"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["r"]},{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["9"]}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"remove","lines":["9"],"id":21}],[{"start":{"row":1,"column":28},"end":{"row":1,"column":30},"action":"insert","lines":["()"],"id":22}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["/"],"id":23}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"remove","lines":["/"],"id":24}],[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":[";"],"id":25}],[{"start":{"row":1,"column":31},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["r"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["u"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["t"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["."],"id":27},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["g"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["e"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":[" "],"id":28},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["9"]}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":[" "],"id":29}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":[" "],"id":30},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["9"]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":[" "],"id":31}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":[" "],"id":32},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":[" "]}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":11},"action":"insert","lines":["()"],"id":33}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["g"],"id":34},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["e"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":14},"action":"remove","lines":["route.get(get)"],"id":35},{"start":{"row":3,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":["app.get('/', (req,res) => {","    res.send(`","    <form action=\"/\" method=\"POST\">","    Nome do cliente: <input type=\"text\" name=\"nome\">","    <button> Olá mundo </button>","    </form>","    ","    `);","});"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"remove","lines":["app"],"id":36},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["r"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["o"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["u"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["t"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":2},"end":{"row":11,"column":3},"action":"remove","lines":["  res.send(`","    <form action=\"/\" method=\"POST\">","    Nome do cliente: <input type=\"text\" name=\"nome\">","    <button> Olá mundo </button>","    </form>","    ","    `);","});"],"id":37},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"remove","lines":[" "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"remove","lines":[" "]},{"start":{"row":3,"column":29},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["}"],"id":38},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":[")"]}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":[";"],"id":39}],[{"start":{"row":3,"column":29},"end":{"row":5,"column":0},"action":"insert","lines":["","    ",""],"id":40}],[{"start":{"row":1,"column":31},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":41},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["c"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["o"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["n"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["s"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":[" "],"id":42},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["h"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["o"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["m"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["e"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["C"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["o"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["n"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["t"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["r"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["o"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["l"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["l"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["e"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":[" "],"id":43},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":[" "],"id":44},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["r"]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["e"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["q"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["u"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["i"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["r"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":32},"action":"insert","lines":["()"],"id":45}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":33},"action":"insert","lines":["''"],"id":46}],[{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["."],"id":47},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["c"],"id":48},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["o"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["n"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["t"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["r"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["o"]},{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["l"]},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["l"]},{"start":{"row":2,"column":42},"end":{"row":2,"column":43},"action":"insert","lines":["e"]},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["r"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["/"],"id":49},{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"insert","lines":["h"]},{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"insert","lines":["o"]},{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"insert","lines":["m"]},{"start":{"row":2,"column":49},"end":{"row":2,"column":50},"action":"insert","lines":["e"]},{"start":{"row":2,"column":50},"end":{"row":2,"column":51},"action":"insert","lines":["C"]},{"start":{"row":2,"column":51},"end":{"row":2,"column":52},"action":"insert","lines":["o"]},{"start":{"row":2,"column":52},"end":{"row":2,"column":53},"action":"insert","lines":["n"]},{"start":{"row":2,"column":53},"end":{"row":2,"column":54},"action":"insert","lines":["t"]},{"start":{"row":2,"column":54},"end":{"row":2,"column":55},"action":"insert","lines":["r"]},{"start":{"row":2,"column":55},"end":{"row":2,"column":56},"action":"insert","lines":["o"]},{"start":{"row":2,"column":56},"end":{"row":2,"column":57},"action":"insert","lines":["l"]},{"start":{"row":2,"column":57},"end":{"row":2,"column":58},"action":"insert","lines":["l"]},{"start":{"row":2,"column":58},"end":{"row":2,"column":59},"action":"insert","lines":["e"]},{"start":{"row":2,"column":59},"end":{"row":2,"column":60},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":60},"end":{"row":2,"column":61},"action":"insert","lines":["."],"id":50},{"start":{"row":2,"column":61},"end":{"row":2,"column":62},"action":"insert","lines":["j"]},{"start":{"row":2,"column":62},"end":{"row":2,"column":63},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["}"],"id":51},{"start":{"row":5,"column":4},"end":{"row":6,"column":0},"action":"remove","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "]},{"start":{"row":4,"column":29},"end":{"row":5,"column":0},"action":"remove","lines":["",""]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"remove","lines":["{"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"remove","lines":[" "]}],[{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"remove","lines":[">"],"id":52},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"remove","lines":["="]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"remove","lines":[" "]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":[")"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"remove","lines":["s"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"remove","lines":["e"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"remove","lines":["r"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"remove","lines":[","]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["q"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"remove","lines":["e"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"remove","lines":["r"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":17},"action":"remove","lines":["()"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"remove","lines":[" "]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"remove","lines":[","]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":[","],"id":53}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":[" "],"id":54},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["h"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["m"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["e"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["C"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["o"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["n"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["t"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["r"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["o"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["l"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["l"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["e"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["."],"id":55},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["p"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["a"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["g"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["i"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["n"]},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["a"]},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["I"]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["n"]},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["i"]},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["c"]}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":40},"action":"remove","lines":["paginaInic"],"id":56},{"start":{"row":4,"column":30},"end":{"row":4,"column":43},"action":"insert","lines":["paginaInicial"]}],[{"start":{"row":4,"column":43},"end":{"row":4,"column":44},"action":"insert","lines":[")"],"id":57}],[{"start":{"row":4,"column":45},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":58},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["m"]},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["o"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["d"]},{"start":{"row":7,"column":3},"end":{"row":7,"column":4},"action":"insert","lines":["u"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":["e"],"id":59}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["l"],"id":60},{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["e"]},{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["."]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["e"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["x"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["p"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["o"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["r"]},{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":["t"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["s"]}],[{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":[" "],"id":61},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":[" "],"id":62},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["r"]},{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["o"]},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["u"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["i"]},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["t"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"remove","lines":["e"],"id":63},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"remove","lines":["t"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["i"]}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["t"],"id":64},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["e"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":[";"]}],[{"start":{"row":4,"column":45},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":65},{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["r"]},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["o"]},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["u"]},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["t"]},{"start":{"row":5,"column":4},"end":{"row":5,"column":5},"action":"insert","lines":["e"]},{"start":{"row":5,"column":5},"end":{"row":5,"column":6},"action":"insert","lines":["."]},{"start":{"row":5,"column":6},"end":{"row":5,"column":7},"action":"insert","lines":["p"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["i"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["s"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["t"],"id":66},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["s"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["i"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["i"],"id":67},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["o"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["s"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["t"],"id":68},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["s"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["o"]}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["o"],"id":69},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["s"]},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["t"],"id":70},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["s"]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"remove","lines":["o"]},{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"remove","lines":["i"]}],[{"start":{"row":5,"column":7},"end":{"row":5,"column":8},"action":"insert","lines":["o"],"id":71},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["s"]},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":12},"action":"insert","lines":["()"],"id":72}],[{"start":{"row":5,"column":11},"end":{"row":5,"column":13},"action":"insert","lines":["''"],"id":73}],[{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"insert","lines":["/"],"id":74}],[{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"insert","lines":[","],"id":75}],[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":[" "],"id":76}],[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"remove","lines":[" "],"id":77},{"start":{"row":5,"column":13},"end":{"row":5,"column":14},"action":"remove","lines":[","]}],[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":[","],"id":78}],[{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":[" "],"id":79},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["h"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["o"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["m"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":[" "],"id":80},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["c"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["o"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["n"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["t"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["r"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["o"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["l"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["l"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["e"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"remove","lines":["r"],"id":81},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"remove","lines":["e"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"remove","lines":["l"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"remove","lines":["l"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"remove","lines":["o"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["r"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"remove","lines":["t"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"remove","lines":["n"]},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"remove","lines":["o"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["c"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":[" "]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["C"],"id":82},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"remove","lines":["n"],"id":83}],[{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["o"],"id":84},{"start":{"row":5,"column":22},"end":{"row":5,"column":23},"action":"insert","lines":["n"]},{"start":{"row":5,"column":23},"end":{"row":5,"column":24},"action":"insert","lines":["t"]},{"start":{"row":5,"column":24},"end":{"row":5,"column":25},"action":"insert","lines":["r"]},{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["o"]},{"start":{"row":5,"column":26},"end":{"row":5,"column":27},"action":"insert","lines":["l"]},{"start":{"row":5,"column":27},"end":{"row":5,"column":28},"action":"insert","lines":["l"]},{"start":{"row":5,"column":28},"end":{"row":5,"column":29},"action":"insert","lines":["e"]},{"start":{"row":5,"column":29},"end":{"row":5,"column":30},"action":"insert","lines":["r"]},{"start":{"row":5,"column":30},"end":{"row":5,"column":31},"action":"insert","lines":["."]}],[{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"insert","lines":["t"],"id":85},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"insert","lines":["r"]},{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"insert","lines":["a"]},{"start":{"row":5,"column":34},"end":{"row":5,"column":35},"action":"insert","lines":["t"]},{"start":{"row":5,"column":35},"end":{"row":5,"column":36},"action":"insert","lines":["a"]},{"start":{"row":5,"column":36},"end":{"row":5,"column":37},"action":"insert","lines":["P"]},{"start":{"row":5,"column":37},"end":{"row":5,"column":38},"action":"insert","lines":["o"]},{"start":{"row":5,"column":38},"end":{"row":5,"column":39},"action":"insert","lines":["s"]},{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["d"]},{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["t"]}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"remove","lines":["t"],"id":86},{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"remove","lines":["d"]}],[{"start":{"row":5,"column":39},"end":{"row":5,"column":40},"action":"insert","lines":["t"],"id":87}],[{"start":{"row":5,"column":41},"end":{"row":5,"column":42},"action":"insert","lines":[";"],"id":88}],[{"start":{"row":5,"column":42},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":89}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":0},"end":{"row":6,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1706821492595}