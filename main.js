import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"

class Main {

    constructor() {
        this.Cantidad = new Cantidad(300,"Gramos")
        this.Ingrediente = new Ingrediente(this.Cantidad, "Azucar", 800)
        this.Receta = new Receta(this.Ingrediente)
    }

probarCantidad() {
    console.log(`${this.Cantidad.getDescripcion()}`)
}

probarIngrediente() {
    console.log(`${this.Ingrediente.getDescripcion()}`)
}
probarReceta() {
    console.log(`${this.Receta.getCosto()}`)
}

}

let app = new Main() 
app.probarCantidad()
app.probarIngrediente()
app.probarReceta()