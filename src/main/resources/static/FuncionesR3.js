//FUNCIONES CLIENTES

function leerClientes(){

    $.ajax({
        url : 'https://localhost:8080/api/Client/all',
        type : 'GET',
        dataType : 'JSON',

        success : function(clientes) {
            let cs=clientes.items;
            $("#listaClientes").empty();
            for (i=0;i<cs.length;i++){
                $("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
                $("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };


    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);


    $.ajax({
        url : 'https://localhost:8080/api/Client/save',
        type : 'POST',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(clientes) {
            $("#idCliente").val(" ");
            $("#nombreCliente").val(" ");
            $("#mailCliente").val(" ");
            $("#edadCliente").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerClientes();
        }
    });
}

function editarCliente(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let mailCliente=$("#mailCliente").val();
    let edad=$("#edadCliente").val();

    let data={
        id:idCliente,
        name:nombre,
        email:mailCliente,
        age:edad
    };


    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);


    $.ajax({
        url : 'https://localhost:8080/api/Client/update',
        type : 'PUT',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(clientes) {
            $("#idCliente").val(" ");
            $("#nombreCliente").val(" ");
            $("#mailCliente").val(" ");
            $("#edadCliente").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerClientes();
        }
    });
}

function borrarCliente(idCliente){

    let data={
        id:idCliente
    };


    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);


    $.ajax({
        url : 'https://localhost:8080/api/Client/{id}',
        type : 'DELETE',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(clientes) {
            $("#idCliente").val(" ");
            $("#nombreCliente").val(" ");
            $("#mailCliente").val(" ");
            $("#edadCliente").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerClientes();
        }
    });
}

function buscarClientesId(){
    let idC=$("#idCliente").val( );


    $.ajax({
        url : 'https://localhost:8080/api/Client/{id}'+idC,
        type : 'GET',
        dataType : 'JSON',
        contentType : "application/json",


        success : function(idcliente) {
            $("#idCliente").val(" ");
            $("#nombreCliente").val(" ");
            $("#mailCliente").val(" ");
            $("#edadCliente").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaClientes").empty();



            $("#listaClientes").append(idcliente.items[0].id+" <b>"+idcliente.items[0].name+"</b> "+idcliente.items[0].email+" "+idcliente.items[0].age);
            $("#listaClientes").append("<button onclick='borrarCliente("+idcliente.items[0].id+ ")'>Borrar</button><br>");


        },


        error : function(xhr, status){
            alert('ha sucedido un problema');

        },


    });

}

//FUNCIONES MENSAJES

function leerMensajes(){

    $.ajax({
        url : 'https://localhost:8080/api/Message/all',
        type : 'GET',
        dataType : 'JSON',

        success : function(mensajes) {
            let ms=mensajes.items;
            $("#listaMensajes").empty();
            for (i=0;i<ms.length;i++){
                $("#listaMensajes").append(ms[i].id+" <b>"+ms[i].messagetext);
                $("#listaMensajes").append("<button onclick='borrarMensaje("+ms[i].id+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarMensajes(){
    let idMensaje=$("#idMensaje").val();
    let texto=$("#TextoMensaje").val();

    let data_m={
        id:idMensaje,
        messagetext:texto,
    };


    let dataToSend=JSON.stringify(data_m);
    console.log(dataToSend);


    $.ajax({
        url : 'https://localhost:8080/api/Message/save',
        type : 'POST',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(mensajes) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerMensajes();
        }
    });
}


function editarMensajes(){
    let idMensaje=$("#idMensaje").val();
    let texto=$("#TextoMensaje").val();

    let data_m={
        id:idMensaje,
        messagetext:texto,
    };


    let dataToSend=JSON.stringify(data_m);
    console.log(dataToSend);


    $.ajax({
        url : 'https://localhost:8080/api/Message/update',
        type : 'PUT',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(mensajes) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerMensajes();
        }
    });
}


function borrarMensaje(idMensaje){

    let data_m={
        id:idMensaje
    };


    let dataToSend=JSON.stringify(data_m);
    console.log(dataToSend);


    $.ajax({
        url : 'https://localhost:8080/api/Message/{id}',
        type : 'DELETE',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(mensajes) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerMensajes();
        }
    });
}

function buscarMensajesId(){
    let idM=$("#idMensaje").val( );


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/'+idM,
        type : 'GET',
        dataType : 'JSON',
        contentType : "application/json",


        success : function(idmensaje) {
            $("#idMensaje").val(" ");
            $("#TextoMensaje").val(" ");

            //console.log(idclientes.items[0]);


            $("#listaMensajes").empty();



            $("#listaMensajes").append(idmensaje.items[0].id+" <b>"+idmensaje.items[0].messagetext+"</b>");
            $("#listaMensajes").append("<button onclick='borrarMensaje("+idmensaje.items[0].id+ ")'>Borrar</button><br>");


        },


        error : function(xhr, status){
            alert('ha sucedido un problema');
        }
    });

}

//FUNCIONES CUATRIMOTOS

function leerCuatrimotos(){

    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'GET',
        dataType : 'JSON',

        success : function(cuatrimotos) {
            let cts=cuatrimotos.items;
            $("#listaCuatrimoto").empty();
            for (i=0;i<cts.length;i++){
                $("#listaCuatrimoto").append(cts[i].id+" <b>"+cts[i].brand+"</b> "+cts[i].model+" "+cts[i].category_id+" "+cts[i].name);
                $("#listaCuatrimoto").append("<button onclick='borrarCuatrimoto("+cts[i].id+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarCuatrimoto(){
    let idCuatrimoto=$("#idCuatrimoto").val();
    let marca=$("#marcaCuatrimoto").val();
    let modelo=$("#modeloCuatrimoto").val();
    let categoria=$("#categoriaCuatrimoto").val();
    let nombre=$("#nombreCuatrimoto").val();

    let data_c={
        id:idCuatrimoto,
        brand:marca,
        model:modelo,
        category_id:categoria,
        name:nombre

    };


    let dataToSend=JSON.stringify(data_c);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'POST',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(cuatrimotos) {
            $("#idCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#categoriaCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerCuatrimotos();
        }
    });
}

function editarCuatrimoto(){
    let idCuatrimoto=$("#idCuatrimoto").val();
    let marca=$("#marcaCuatrimoto").val();
    let modelo=$("#modeloCuatrimoto").val();
    let categoria=$("#categoriaCuatrimoto").val();
    let nombre=$("#nombreCuatrimoto").val();

    let data_c={
        id:idCuatrimoto,
        brand:marca,
        model:modelo,
        category_id:categoria,
        name:nombre
    };


    let dataToSend=JSON.stringify(data_c);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'PUT',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(cuatrimotos) {
            $("#idCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#categoriaCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
        },

        complete: function(){
            leerCuatrimotos();
        }
    });
}

function borrarCuatrimoto(idCuatrimoto){

    let data_c={
        id:idCuatrimoto
    };


    let dataToSend=JSON.stringify(data_c);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'DELETE',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(cuatrimotos) {
            $("#idCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#categoriaCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerCuatrimotos();
        }
    });
}

function buscarCuatrimotoId(){
    let idCM=$("#idCuatrimoto").val( );


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike/'+idCM,
        type : 'GET',
        dataType : 'JSON',
        contentType : "application/json",


        success : function(idcuatrimoto) {
            $("#idCuatrimoto").val(" ");
            $("#marcaCuatrimoto").val(" ");
            $("#modeloCuatrimoto").val(" ");
            $("#categoriaCuatrimoto").val(" ");
            $("#nombreCuatrimoto").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaCuatrimoto").empty();



            $("#listaCuatrimoto").append(idcuatrimoto.items[0].id+" <b>"+idcuatrimoto.items[0].brand+"</b> "+idcuatrimoto.items[0].model+" "+idcuatrimoto.items[0].category_id+" "+idcuatrimoto.items[0].name);
            $("#listaCuatrimoto").append("<button onclick='borrarCuatrimoto("+idcuatrimoto.items[0].id+ ")'>Borrar</button><br>");


        }
    });

}

//Funciones Categoria o gama

function leerCategorias(){

    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'GET',
        dataType : 'JSON',

        success : function(categorias) {
            let cg=categorias.items;
            $("#listaCategoria").empty();
            for (i=0;i<cg.length;i++){
                $("#listaCategoria").append(cg[i].id+" <b>"+cg[i].name+"</b> "+cg[i].descripcion);
                $("#listaCategoria").append("<button onclick='borrarCategoria("+cg[i].id+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarCategoria(){
    let idCategoria=$("#idCategoria").val();
    let nombre=$("#nombreCategoria").val();
    let descripcion=$("#descripcionCategoria").val();

    let data_cg={
        id:idCategoria,
        name:nombre,
        description:descripcion,
    };


    let dataToSend=JSON.stringify(data_cg);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'POST',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(categorias) {
            $("#idCategoria").val(" ");
            $("#nombreCategoria").val(" ");
            $("#descripcionCategoria").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerCategorias();
        }
    });
}

function editarCategoria(){
    let idCategoria=$("#idCategoria").val();
    let nombre=$("#nombreCategoria").val();
    let descripcion=$("#descripcionCategoria").val();

    let data_cg={
        id:idCategoria,
        name:nombre,
        description:descripcion,
    };


    let dataToSend=JSON.stringify(data_cg);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'PUT',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(categorias) {
            $("#idCategoria").val(" ");
            $("#nombreCategoria").val(" ");
            $("#descripcionCategoria").val(" ");
        },

        complete: function(){
            leerCategorias();
        }
    });
}

function borrarCategoria(idCategoria){

    let data_cg={
        id:idCategoria
    };


    let dataToSend=JSON.stringify(data_cg);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'DELETE',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(categorias) {
            let idCategoria=$("#idCategoria").val();
            let nombre=$("#nombreCategoria").val();
            let descripcion=$("#descripcionCategoria").val();
        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerCategorias();
        }
    });
}

function buscarCategoriaId(){
    let idCG=$("#idCategoria").val( );


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike/'+idCG,
        type : 'GET',
        dataType : 'JSON',
        contentType : "application/json",


        success : function(idcategoria) {
            $("#idCategoria").val(" ");
            $("#nombreCategoria").val(" ");
            $("#descripcionCategoria").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaCategoria").empty();



            $("#listaCategoria").append(idcategoria.items[0].id+" <b>"+idcategoria.items[0].name+"</b> "+idcategoria.items[0].description);
            $("#listaCategoria").append("<button onclick='borrarCategoria("+idcategoria.items[0].id+ ")'>Borrar</button><br>");


        }
    });

}

//Funciones de reservaciones

function leerReservaciones(){

    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'GET',
        dataType : 'JSON',

        success : function(reservaciones) {
            let r=reservaciones.items;
            $("#listaReservaciones").empty();
            for (i=0;i<r.length;i++){
                $("#listaReservaciones").append(r[i].idReservation+" <b>"+r[i].startDate+"</b> "+r[i].devolutionDate+" "+r[i].status);
                $("#listaReservaciones").append("<button onclick='borrarReservacion("+r[i].idReservation+ ")'>Borrar</button><br>");
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        }

    });

}

function guardarReservacion(){
    let idReservacion=$("#idReservacion").val();
    let inicio=$("#fechaInicio").val();
    let devolucion=$("#fechaDevolucion").val();
    let Calificacion=$("#calificaciones").val();

    let data_r={
        idReservation:idReservacion,
        startDate:inicio,
        devolutionDate:devolucion,
        status:Calificacion,
    };


    let dataToSend=JSON.stringify(data_r);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'POST',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(reservaciones) {
            $("#idReservacion").val(" ");
            $("#fechaInicio").val(" ");
            $("#fechaDevolucion").val(" ");
            $("#calificaciones").val(" ");
        },
        //error : function(xhr, status) {
        //alert('ha sucedido un problema');

        //},
        complete: function(){
            leerReservaciones();
        }
    });
}

function editarReservacion(){
    let idReservacion=$("#idReservacion").val();
    let inicio=$("#fechaInicio").val();
    let devolucion=$("#fechaDevolucion").val();
    let Calificacion=$("#calificaciones").val();

    let data_r={
        idReservation:idReservacion,
        startDate:inicio,
        devolutionDate:devolucion,
        status:Calificacion,
    };


    let dataToSend=JSON.stringify(data_r);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'PUT',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(reservaciones) {
            $("#idReservacion").val(" ");
            $("#fechaInicio").val(" ");
            $("#fechaDevolucion").val(" ");
            $("#calificaciones").val(" ");
        },

        complete: function(){
            leerReservaciones();
        }
    });
}

function borrarReservacion(idReservacion){

    let data_r={
        id:idReservacion
    };


    let dataToSend=JSON.stringify(data_r);
    console.log(dataToSend);


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike',
        type : 'DELETE',
        dataType : 'JSON',
        data: dataToSend,
        contentType: 'application/json',

        success : function(reservaciones) {
            let idReservacion=$("#idReservacion").val();
            let inicio=$("#fechaInicio").val();
            let devolucion=$("#fechaDevolucion").val();
            let Calificacion=$("#calificaciones").val();

        },
        error : function(xhr, status) {
            alert('ha sucedido un problema');

        },
        complete: function(){
            leerReservaciones();
        }
    });
}

function buscarReservacionId(){
    let idR=$("#idReservacion").val( );


    $.ajax({
        url : 'https://gaf8e23058f5fb2-fyfunmk6a60bqoay.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike/'+idR,
        type : 'GET',
        dataType : 'JSON',
        contentType : "application/json",


        success : function(idReservacion) {
            $("#idReservacion").val(" ");
            $("#fechaInicio").val(" ");
            $("#fechaDevolucion").val(" ");
            $("#calificaciones").val(" ");
            //console.log(idclientes.items[0]);


            $("#listaReservaciones").empty();



            $("#listaReservaciones").append(idReservacion.items[0].idReservation+" <b>"+idReservacion.items[0].startDate+"</b> "+idReservacion.items[0].devolutionDate+" "+idReservacion.items[0].status);
            $("#listaReservaciones").append("<button onclick='borrarReservacion("+idReservacion.items[0].id+ ")'>Borrar</button><br>");


        }
    });

}