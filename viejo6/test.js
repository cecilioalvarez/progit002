const fs = require("fs");
const assert = require("assert");

const html = fs.readFileSync("105.html", "utf8");

assert.ok(
    html.includes("bienvenido a la aplicacion"),
    "ERROR: No existe el título esperado"
);

console.log("TEST CORRECTO");