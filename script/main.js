// Variabili 

var nomeChat = [
    'michele',
    'fabio',
    'samuele',
    'alessandro b.',
    'alessandro l.', 
    'claudia', 
    'davide', 
    'federico'
   ];

jQuery( document ).ready( function($) {

    /*
     * 
     * Logica di invio messaggi
     * 
     */
    
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

    /**
     * 
     *  Ricerca delle chat :
     * 
     */

    var iconSearch = $('.search label i');
    var searchInput = $('#search-input');   


    iconSearch.on('click', function() {
        
        chatSearch();

    } );

    searchInput.keyup(function (e) {   
        
        if ( e.which == 13 ) {

            chatSearch(); 

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

function chatSearch() {
    var textSearchBar = $('#search-input').val().toLowerCase();
    
    if ( textSearchBar !== '' ) {

        $('.global-chat .chat').hide();

        for ( var i = 0; i < nomeChat.length; i++ ) {
            if ( nomeChat[i].includes(textSearchBar) ) {
                
                if ( nomeChat[i] == 'michele') {

                    $('.global-chat .chat.michele').show();

                } else if ( nomeChat[i] == 'fabio' ) {

                    $('.global-chat .chat.fabio').show();

                } else if ( nomeChat[i] == 'samuele' ) {

                    $('.global-chat .chat.samuele').show();

                } else if ( nomeChat[i] == 'alessandro b.' ) {

                    $('.global-chat .chat.alessandro-b').show();

                } else if ( nomeChat[i] == 'alessandro l.' ) {

                    $('.global-chat .chat.alessandro-l').show();

                } else if ( nomeChat[i] == 'claudia' ) {

                    $('.global-chat .chat.claudia').show();

                } else if ( nomeChat[i] == 'davide' ) {

                    $('.global-chat .chat.davide').show();

                } else if ( nomeChat[i] == 'federico' ) {

                    $('.global-chat .chat.federico').show();
                }
                
            }
        }
        
    } else if ( textSearchBar == '' ) {

            $('.global-chat div').show();

    }
}