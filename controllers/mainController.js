const menu = [
    {
        nombre: "Carpaccio Fresco",
        descripcion: "Entrada carpaccio de salmón con cítricos",
        precio: "U$S 65.50",
        imagen: "images/Carpaccio-de-salmon.jpg"
    },
    {
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: "U$S 47.00"
    },
    {
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: "U$S 27.50"
    },
    {
        nombre: "Espárragos blancos",
        descripcion: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: "U$S 37.50"
    }
    
]

const controller = {
    listar: (req,res) => {
        res.render("index", {"menu": menu});
    },
    detalleMenu: (req,res) => {
        res.render("detalleMenu", {"menu": menu})
    }
}

module.exports = controller;