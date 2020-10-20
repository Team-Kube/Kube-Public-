module.exports = class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
     return "Hola mi nombre es " + this.nombre;
  }

  get name(){
    return this.nombre ;
  }
//test
}
