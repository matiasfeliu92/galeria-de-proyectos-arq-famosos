$('.imgObras').click(() => {
    $('.descrObra').addClass('modal-active')
    alert('queres abrir?')
})

$('#cerrar').click(() => {
    $('.contenedor-descrip').removeClass("modal-active")
    console.log('queres cerrar?')
})