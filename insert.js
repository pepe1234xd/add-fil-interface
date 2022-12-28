var columaActual = 1;
var a = {};//objeto a que tendra objetos tipo formData

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("Name").value;
    formData["time"] = document.getElementById("Time").value;
    formData["sala"] = document.getElementById("Sala").value;
    formData["clas"] = document.getElementById("Clasificacion").value;
    formData["price"] = parseFloat(document.getElementById("Price").value).toFixed(2);
    return formData;
}

//validacion de llenado
function validacion() {
    var data = readFormData();
    if(data.nombre == '' || data.clas == '' || data.price=="NaN" || data.time=="non" || data.sala=="non"){
        alert('Error en los datos de entrada, verificalos e ingresalos de nuevo');
        return 2;
    }
    else{
        return 1;
    }
}

//validacion de peliculas diferentes
function pelisrepetidas(){   
    var b = readFormData(), c = 0;

    for(var i=0;i<=columaActual-1;i++){
        if(a[i]==b.nombre)
        {
            alert("Esa pelicula ya la ingresaste, ingresa una pelicula valida");
            c=0;
            break;        
        }
        else{
            c=1
        }   
    }
    if(c==1)
    {
        a[columaActual]= b.nombre;
        return 1;
    }
    
}

function guardar(){
    var data = readFormData();
    if(validacion()==1 && pelisrepetidas()==1){

        let tabla = document.getElementById("tabla").insertRow();
        let c1 = tabla.insertCell(0);
        let c2 = tabla.insertCell(1);
        let c3 = tabla.insertCell(2);
        let c4 = tabla.insertCell(3);
        let c5 = tabla.insertCell(4);
    
        c1.innerHTML = data.nombre;
        c2.innerHTML = data.time;
        c3.innerHTML = data.sala;
        c4.innerHTML = data.clas;
        c5.innerHTML = '$'+data.price;

        columaActual++;
    } 
}

