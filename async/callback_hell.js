function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola, ' + nombre)
        miCallback(nombre)
    }, 1500)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ', nombre)
        otroCallback();
    }, 1000)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla ...')
        callbackHablar()
    })
}


function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, function(){
                console.log('Proceso terminado')
            })
        })
    }else{
        adios(nombre, callback)
    }

}

//

console.log('Iniciando proceso ...')

hola('Carlos', function(nombre){
    conversacion(nombre, 3 ,adios)
})
/*
hola('Carlos', function(nombre){
    hablar(function(){
        hablar(function(){
            adios(nombre, function(){
                console.log('Terminando proceso ...')
            })
        })
    })
})

console.log('Iniciando proceso ...')
hola('Carlos', function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso ...')
    })
})*/