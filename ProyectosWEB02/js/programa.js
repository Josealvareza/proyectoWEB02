
function cambiarColor(){
    var x = document.getElementById("titulo");
    x.style.color = 'white           ';
    x.style.backgroundColor = 'black';                            
}

function restablecerColor(){
    var x = document.getElementById("titulo");
    x.style.color = 'black';
    x.style.backgroundColor = 'bisque';   
}

function obtenerParesImpares(){
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var  cantidadCeros = 0;
    var numero4D = parseInt(document.getElementById('numero4D').value);
    if(numero4D < 1000 || numero4D > 9999){
        alert("El numero no es de 4 digitos, intente de nuevo");
    }
    else{
        //Primer Digito
        digito = parseInt(numero4D/1000);
        if(digito%2 === 0){
            cantidadPares++;
        }
        else{
            if(digito%2 === 1){
                cantidadImpares++;
            }
            else{
                cantidadCeros++;
            }
        }

        //Segundo Digito
        digito = parseInt((numero4D%1000)/100);
        if(digito%2 === 0){
            cantidadPares++;
        }
        else{
            if(digito%2 === 1){
                cantidadImpares++;
            }
            else{
                cantidadCeros++;
            }
        }

        //Tercer Digito
        digito = parseInt(((numero4D%1000)%100)/10);
        if(digito%2 === 0){
            cantidadPares++;
        }
        else{
            if(digito%2 === 1){
                cantidadImpares++;
            }
            else{
                cantidadCeros++;
            }
        }

        //Cuarto Digito
        digito = numero4D%10;
        if(digito%2 === 0){
            cantidadPares++;
        }
        else{
            if(digito%2 === 1){
                cantidadImpares++;
            }
            else{
                cantidadCeros++;
            }
        }
    }
    document.getElementById('pares').value = cantidadPares;
    document.getElementById('impares').value = cantidadImpares;
    document.getElementById('ceros').value = cantidadCeros;
}