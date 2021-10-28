class Obra {
    constructor(id, nombre, arquitecto, año, imgSrc, altImg, reseña) {
        this.id = id,
            this.nombre = nombre,
            this.arquitecto = arquitecto,
            this.año = año,
            this.imgSrc = imgSrc,
            this.altImg = altImg,
            this.reseña = reseña
    }

    datosObra() {
        return `${this.id} - ${this.nombre} - ${this.arquitecto} - ${this.año}`
    }
}

const obrasArquitectura = []

obrasArquitectura.push(new Obra(1, "Biblioteca Nacional", "Arq Clorindo Testa", 1810, "https://www.cultura.gob.ar/media/uploads/vista_av.del_libertador_1.jpg", "imagen 1", "La Biblioteca Nacional fue creada por un decreto de la Primera Junta el 13 de septiembre de 1810, bajo el nombre de Biblioteca Pública de Buenos Aires. Su primera ubicación fue, durante dos años, el edificio del Cabildo. En 1812 abre sus puertas al público en una sala del edificio que se encuentra en la esquina formada por las calles Moreno y Perú, dentro de la zona que actualmente se conoce como la Manzana de las Luces. Su primer material bibliográfico fue donado por instituciones como el Cabildo Eclesiástico y el Real Colegio San Carlos, y varios particulares como Luis Chorroarín, Manuel Belgrano4​ y el obispo Manuel Azamor y Ramírez.5​6​"))
obrasArquitectura.push(new Obra(2, "Casa del puente", "Arq Amancio Williams", 1946, "https://www.iconichouses.org/foto/at-risk/puente/2-Casa-del-Puente-after-a-fire.jpg", "imagen 2", "Museo Casa sobre el Arroyo o mal llamada Casa del Puente es una casa, diseñada por Amancio Williams y Delfina Gálvez Bunge2​ en Mar del Plata declarada de Interés Patrimonial, Cultural, Natural por parte la Municipalidad de General Pueyrredon; Monumento Histórico Artístico Nacional y Patrimonio Cultural, Histórico, Arquitectónico y Ambiental de la Provincia de Buenos Aires.​"))
obrasArquitectura.push(new Obra(3, "Pabellón de Barcelona", "Arq Mies van der Rohe", 1929, "https://unbuendiaenbarcelona.com/wp-content/uploads/2015/04/63064_main_full.jpg", "imagen 3", "El Pabellón de Alemania, diseñado por Ludwig Mies van der Rohe y Lilly Reich, fue el edificio de representación de Alemania en la Exposición internacional de Barcelona celebrada en el año 1929. Concebido como espacio representativo para albergar la recepción oficial presidida por el rey Alfonso XIII a las autoridades alemanas,1​ el edificio pretendía simbolizar el carácter progresista y democrático de la nueva República de Weimar y su recuperación tras la Primera Guerra Mundial.​"))

console.log(obrasArquitectura)

const mostrarObras = () => {
    $('#info-obras').html("")

    obrasArquitectura.forEach((obra) => {
        $('#info-obras').append(`
            <div class="galeria col-md-4">
                <h3>${obra.id} - ${obra.nombre} - ${obra.arquitecto}</h3>
                <h4>${obra.año}</h4>
                <img id=${obra.id} class="imgObras img-fluid" src=${obra.imgSrc} alt=${obra.altImg}>
            </div>
            `)
    })
}

mostrarObras()

const mostrarReseña = () => {
    // obrasArquitectura.forEach((obra) => {
    //     $('.imgObras').click(() => {
    //         $('.modal-content').append(`
    //             <h3>${obra.reseña}</h3>
    //             `)
    //     })
    // })

    const obraSeleccionada = obrasArquitectura.find(obra => obra.reseña === obra.reseña)
    console.log(obraSeleccionada)

    $('.imgObras').click(() => {
        $('#tvesModal').css({ "display": "block" })
        $('body').css({ "position": "static", "height": "100%", "overflow": "hidden" })
    })
}

mostrarReseña()


$('.close').click(() => {
    $('#tvesModal').css({ "display": "none" })
    $('body').css({ "position": "inherit", "height": "auto", "overflow": "visible" })
})