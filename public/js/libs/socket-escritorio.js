var socket = io()

//Para obtener argumentos de la url
var searchParamas = new URLSearchParams(window.location.search)

if(!searchParamas.has('escritorio')){

    window.location = 'index.html' //Se sale de la pantalla actual y vuelve al index

    throw new Error('El escritorio es necesario')
}

var escritorio = searchParamas.get('escritorio')
var label = $('small')

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio)



$('button').on('click', function(){
   
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
        
        if(resp === 'No hay tickets'){

            label.text('Ticket ' + resp)

            alert(resp)
            
            return;
        }
        
        label.text('Ticket ' + resp.numero)
        
        console.log(resp);
    })
})