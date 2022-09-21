function insert(num){ // funcion para inserir varios numeros.
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){ //Limpar para el botón C, le colocamos el evento allá en el HTML
    
    document.getElementById('resultado').innerHTML = "";
    // Vacío, porque se supone que limpiará.
}

function back(){ //Funcion para borrar solo un numero, volver al numero anterior.
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

}

function calcular(){
    var resultado =  document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }else {
        document.getElementById('resultado').innerHTML = 'Nada..'
    }
// eval es la funcion que permite calcular matematicamente las operaciones.
}

