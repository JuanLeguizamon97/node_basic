async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre)
            resolve(nombre)
        }, 1500)
    })
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ', nombre)
            resolve(nombre);
        }, 1000)
    })

}

async function hablar(nombre){
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
            console.log('Bla bla bla bla ...')
            resolve(nombre)
            reject('Hay un error')
        })
    })

}

async function main(){
    let nombre = await hola('Maria Laura')
    await hablar()
    await adios(nombre)
    console.log('Terminamos el proceso')
}

console.log('Empezamos el proceso ...')
main()
