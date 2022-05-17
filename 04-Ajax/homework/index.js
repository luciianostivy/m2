var URL = "http://localhost:5000/amigos"; 
var showFriends = function(){   // esta es la sintaxis para seleccionar el boton el # es por que es una ID
    $(`#lista`).empty(); // esto es para limpiar
    $.get(`.${URL}`, function(friends){ // para pedir informacion
        friends.forEach(e =>{
            $('lista').append(`<li id="${e.id}">${e.name} X</li`)

        })
    }) 
}
$("#boton").click(showFriends) ;

$("#search").click(function(){
     let id = $('#input').val();
     if(id){
            $.get(`${URL}/${id}`, function (firend){
            $('#amigo').text(`${friend.nade} ${friend.age} ${friend.email}`)
             $('#input').val("");
         }) 
     } else {
         $('#amigo').text ("tenes que ingresar un ID"); 
     }
}) ;


let deleteFriend = function(){
    let id = $('#inputDelete').val(); //tomo el valor para trabajar con eso
    if (id){
        $.ajax({
            url: `${URL}/${id}`, //buscar en internet la sintaxis de ajax delete
            type: "DELETE",     
            success: function(){
                $('#success').text('tu amigo fue eliminado correctamente');
                $('#inputDelete').val("");
                showFriends();
            }
        })
    }else {
        $('#success').text('tenes que ingresar un amiguito logi');
    }
}
$("#delete").click(deleteFriend);  //selecciono el elemento con esa sintaxis y le asigno la funcion deleteFriend
