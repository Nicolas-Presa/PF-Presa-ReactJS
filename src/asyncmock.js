const productos = [
    {nombre: "Vodka Sky", precio: 1500, stock: 5, img: "../image/vodkaSky.jpg", id: "1", idCat: "1"},
    {nombre: "Vodka Smirnoff", precio: 2000, stock: 5, img: "../image/vodkaSmirnoff.jpg", id: "2", idCat: "1"},
    {nombre: "Vodka Absolut", precio: 3000, img: "../image/vodkaAbsolut.jpg", id: "3", idCat: "1"},
    {nombre: "Heineken", precio: 600, stock: 5, img: "../image/cervezaHeineken.jpg", id: "4", idCat: "2"},
    {nombre: "Stella", precio: 600, stock: 5, img: "../image/cervezaStella.jpg", id: "5", idCat: "2"},
    {nombre: "Brahma", precio: 500, stock: 5, img: "../image/cervezaBrahma.jpg", id: "6", idCat: "2"},
    {nombre: "Corona", precio: 1000, stock: 5, img: "../image/cervezaCorona.jpg", id: "7", idCat: "2"},
    {nombre: "Rabieta IPA", precio: 800, stock: 5, img: "../image/cervezaRabietaIPA.jpg", id: "8", idCat: "2"},
    {nombre: "Rabieta APA", precio: 800, stock: 5, img: "../image/cervezaRabietaAPA.jpg", id: "9", idCat: "2"},
    {nombre: "Fernet", precio: 2500, stock: 5, img: "../image/fernetBranca.jpg", id: "10", idCat: "3"},
    {nombre: "Termidor", precio: 500, stock: 5, img: "../image/vinoTermidor.jpg", id: "11", idCat: "3"},
    {nombre: "Cosecha Tardia", precio: 800, stock: 5, img: "../image/vinoCosechaTardia.jpg", id: "12", idCat: "3"},
    {nombre: "Gancia", precio: 800, stock: 5, img: "../image/gancia.jpg", id: "13", idCat: "3"},
    {nombre: "Chandon", precio: 3000, stock: 5, img: "../image/chandon.jpg", id: "14", idCat: "3"}
]



export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}