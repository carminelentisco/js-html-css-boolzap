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

    /**
     * 
     *  Ricerca delle chat :
     * 
     */

    var iconSearch = $('.search label i');
    var chatSearchBar = $('#search-input');
    var nomeChat = [
                     'Michele',
                     'Fabio',
                     'Samuele',
                     'Alessandro B.',
                     'Alessandro L.', 
                     'Claudia', 
                     'Davide', 
                     'Federico'
                    ];


    iconSearch.on('click', function() {

        var textSearchBar = chatSearchBar.val();

        if ( textSearchBar !== '' ) {

            $('.global-chat div').hide();

            for ( var i = 0; i < nomeChat.length; i++ ) {
                for ( var k = 0; k < nomeChat[i].length; k++) {     
                    if ( nomeChat[i].includes(textSearchBar) ) {
                        console.log(nomeChat[i]);
                        
                    }
                }
                


                /*
                for ( var k = 0; k <= nomeChat[i].length; k++) {

                    if ( nomeChat[i].includes(k) ) {
                        console.log('si');
                    }
                    
                }
                */
                
            }
            
        } else if ( textSearchBar == '' ) {

                $('.global-chat div').show();

        }
        

        //for ( var i = 0; i <= textSearchBar.length; i++ ) {
        //}
        

    } );

    /*
    var textSearchBar = chatSearchBar.val();

    console.log(textSearchBar);
    */
    

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