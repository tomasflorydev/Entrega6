class Vinilo {
    constructor(nombre, artista, precio, duracion) {
        this.nombre = nombre;
        this.artista = artista;
        this.precio = precio;
        this.duracion = duracion;
    }
}

const RAM = new Vinilo('Random Access Memory', 'Daft Punk', 48700, 74);
const Brothers_In_Arms = new Vinilo('Brothers in Arms', 'Dire Straits', 52500, 48);
const Luvsic = new Vinilo('Luv(sic) Hexalogy', 'Nujabes', 33200, 132);
const MethaMusic = new Vinilo('Methaporical Music', 'Nujabes', 33200, 62);

const vinilos = [RAM, Brothers_In_Arms, Luvsic, MethaMusic];

let opcion = prompt(
    "Bienvenido a la tienda de Vinilos. ¿Qué deseas hacer?\n" +
    "1. Ver vinilos de Nujabes\n" +
    "2. Filtrar vinilos de más de 1 hora\n" +
    "3. Aplicar descuento del 20% a todo el catálogo\n" +
    "4. Buscar un vinilo específico por nombre"
);

if (opcion === '1') {
    
    // Método de Búsqueda 1: filter()
    console.log('Vinilos de Nujabes:');
    const vinilosNujabes = vinilos.filter((vinilo) => vinilo.artista === 'Nujabes');
    console.log(vinilosNujabes);

} else if (opcion === '2') {
    
    console.log('Filtrar por duración más de una hora:');
    const vinilosLargos = vinilos.filter((vinilo) => vinilo.duracion > 60);
    console.log(vinilosLargos);

} else if (opcion === '3') {
    
    console.log('Temporada de descuentos (Precios con 20% OFF):');
    const vinilosConDescuento = vinilos.map((vinilo) => {
        return {
            nombre: vinilo.nombre,
            artista: vinilo.artista,
            precio: vinilo.precio * 0.8, // Aplica el descuento
            duracion: vinilo.duracion
        };
    });
    console.log(vinilosConDescuento); 

} else if (opcion === '4') {
    
    let nombreBuscado = prompt("Ingresa el nombre exacto del vinilo (ej. 'Random Access Memory'):");
    const viniloEncontrado = vinilos.find((vinilo) => vinilo.nombre === nombreBuscado);
    
    if (viniloEncontrado) {
        console.log('Vinilo encontrado:', viniloEncontrado);
    } else {
        console.log('No tenemos ese vinilo en stock.');
    }

} else {
    console.log('Opción no válida. Por favor, refresca la página e intenta de nuevo.');
}
