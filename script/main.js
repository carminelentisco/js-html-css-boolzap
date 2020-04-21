

jQuery( document ).ready( function($) {

    /********** LOGICA D'INVIO MESSAGGI **********/
    
    // Setup 
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


    /********** CHAT **********/

    // Ricerca contatti - Setup
    var searchInput = $('#search-input');   


    searchInput.keyup(function (e) {   
        var search = $(this).val().toLowerCase().trim();
        
        $('.global-chat .chat').each(function() {
            var contactName = $(this).find('.contact-name').text().toLowerCase();

            if ( contactName.includes(search) ) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });
    });
    
    // Selezione contatti + show/hide chat - Setup
    var chat = $('.global-chat .chat');
    
    selectChat (chat);


}); // <--------------------- End Page

/********** FUNZIONI ***********/


function sendMessageText (input) {    // Messaggio inviato

    var newInputText = input.val().trim();
    
    if  ( ( newInputText.length > 0 ) && ( newInputText !== '' ) ) {

        var templateMessage = $('.template .template-message').clone();
        templateMessage.find('span:first-child').text(newInputText);
        templateMessage.find('span:last-child').text(time());
        templateMessage.addClass('flex_end').children().addClass('message-send');
        $('.message-chat.active').append(templateMessage);
        input.val('');

    }
    
}

function createReciveMessage () {    // Creazione messaggio di risposta

    var templateMessage = $('.template .template-message').clone();
    templateMessage.addClass('flex_start').find('span:first-child').text('ok');
    templateMessage.find('span:last-child').text(time());
    templateMessage.children().addClass('message-recive');
    $('.message-chat.active').append(templateMessage);

}

function reciveMessageAppend () {

    setTimeout( function () {

        createReciveMessage();
        scroltop();

    }, 1000);

}

function checkHour(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

function time () {
    var time = new Date();
    var hours = checkHour(time.getHours());
    var minutes = checkHour(time.getMinutes());
    return hours +':'+ minutes;
}

function scroltop () {
    var pixelScroll = $('.message-chat.active').height();
    $('.app-right main').scrollTop(pixelScroll);
}

function selectChat (chat) {
    
    chat.each(function() {

        $(this).on('click', function(){
            $('.global-chat .chat').removeClass('active');
            $(this).toggleClass('active');
            $('.message-chat').removeClass('active');
            var dataConversazione = $(this).attr('data-conversazione');
            $('.message-chat[data-conversazione="' + dataConversazione + '"]').toggleClass('active');
        });

    });

}