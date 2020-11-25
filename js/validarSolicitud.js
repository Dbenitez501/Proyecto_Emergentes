function validar()
{
    var nombre, celular, empresa, correo, estado, cod_postal, mensaje, expresion;

    nombre = document.getElementById("nombre").value;
    celular = document.getElementById("celular").value;
    empresa = document.getElementById("company").value;
    correo = document.getElementById("email").value;
    estado = document.getElementById("estado").value;
    cod_postal = document.getElementById("postal").value;
    mensaje = document.getElementById("mensaje").value;

    //Formato para los correos
    expresion = /\w+@+\w+\.+[a-z]/;

    if(nombre ==="" || celular ==="" || empresa ==="" || correo ==="" || estado=== "Seleccionar..." || cod_postal ==="" || mensaje ==="")
    {
        alert("Todos los campos son obligatorios");
        return false;
    } 
    else if(estado === "Seleccionar...")
    {
        alert("Debe escoger un Estado");
        return false;
    }
    else if(nombre.length > 300)
    {
        alert("El nombre sobrepasa el tamaño máximo de letras");
        return false;
    }
    else if(celular.length > 10)
    {
        alert("El celular solo es de 10 dígitos");
        return false;
    }
    else if(isNaN(celular))
    {
        alert("El celular contiene caracteres inválidos");
        return false;
    }
    else if(empresa.length > 60)
    {
        alert("El nombre de la empresa es muy largo");
        return false;
    }

    else if(correo.length > 100)
    {
        alert("El correo es demasiado largo");
        return false;
    }
    else if(!expresion.test(correo))
    {
        alert("El correo no es válido");
        return false;
    }
    else if(mensaje.length > 300)
    {
        alert("El mensaje es muy largo");
        return false;
    }
}