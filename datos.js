const datosDe = require("./personas");

exports.getAll = function getAll() {
  return datosDe.personas;
};

exports.getOlderThan = function getOlderThan(number) {
  var mayoresDeUnaEdad = datosDe.personas.filter(function (item) {
    return item.edad > number;
  });
  return mayoresDeUnaEdad;
};
