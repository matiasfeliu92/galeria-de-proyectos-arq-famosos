let obrasArquitectura = []

fetch('./json/obrasArq.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.forEach((obra) => {
            $('#info-obras').append(`
            <div class="galeria col-md-4">
                <h3>${obra.id} - ${obra.nombre} - ${obra.arquitecto}</h3>
                <h4>${obra.año}</h4>
                <img id=${obra.id} class="imgObras img-fluid" src=${obra.img} alt=${obra.alt}>
            </div>
            `)

            $('.imgObras').click(() => {


                $('.modal-content').append(`
                <h3>${obra.reseña}</h3>
                `)
            })
        })

        $('.imgObras').click(() => {
            $('#tvesModal').css({ "display": "block" })
            $('body').css({ "position": "static", "height": "100%", "overflow": "hidden" })
        })

        $('.close').click(() => {
            $('#tvesModal').css({ "display": "none" })
            $('body').css({ "position": "inherit", "height": "auto", "overflow": "visible" })
        })
    })