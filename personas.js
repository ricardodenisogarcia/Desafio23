const fs = require("fs");

var archivoOriginal = fs.readFileSync("datos.json");

var archivoString = archivoOriginal.toString();

var archivoDatos = JSON.parse(archivoString);

exports.personas = archivoDatos;
