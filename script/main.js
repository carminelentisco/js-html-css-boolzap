jQuery( document ).ready( function($) {

    /*********** Logica di invio messaggi ************/ 
    
    // Setup di base
    var inputText = $('.input-message-text');
    var iconMicSend = $('.icon');

    inputText.on('focus blur', function () {
        iconMicSend.toggleClass('fa-microphone fa-paper-plane');
    });
    
    iconMicSend.on('click', function() {

        sendMessageText(inputText);
        reciveMessageAppend();
        
    });

    inputText.keyup(function (e) {   
        
        if ( e.which == 13 ) {

            sendMessageText(inputText);
            reciveMessageAppend();
            
        }   

    });

    

    

}); // <--------------------- End Page

/********** FUNZIONI ***********/


function sendMessageText (input) {    // Messaggio inviato

    var newInputText = input.val().trim();
    
    if  ( ( newInputText.length > 0 ) && ( newInputText !== '' ) ) {

        var templateMessage = $('.template .template-message').clone();
        templateMessage.find('span:first-child').text(newInputText);
        templateMessage.addClass('flex_end').children().addClass('message-send');
        $('.message-chat.active').append(templateMessage);
        input.val('');

    }
    
}

function createReciveMessage() {    // Creazione messaggio di risposta

    var templateMessage = $('.template .template-message').clone();
    templateMessage.addClass('flex_start').find('span:first-child').text('ok');
    templateMessage.children().addClass('message-recive');
    $('.message-chat.active').append(templateMessage);

}

function reciveMessageAppend () {

    setTimeout( function () {

        createReciveMessage();

    }, 1000);

}