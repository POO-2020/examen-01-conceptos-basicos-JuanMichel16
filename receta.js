import Ingrediente from "./ingrediente.js";

export default class Receta {

/**
 * 
 * @param {String} nombre 
 * @param {String} autor 
 * @param {ingrediente[]} ingrediente 
 */
    constructor(nombre, autor, ingrediente) {
        this.nombre = nombre
        this.autor = autor
        this.ingrediente = []
    }

    getNumeroIngredientes() {
        
    }
}