function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre)
            resolve(nombre)
        }, 1500)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ', nombre)
            resolve(nombre);
        }, 1000)
    })

}

function hablar(nombre){
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            console.log('Bla bla bla bla ...')
            resolve(nombre)
        })
    })

}

console.log('Iniciando el proceso ...')
hola('Carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso')
    })
