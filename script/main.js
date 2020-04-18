jQuery( document ).ready( function($) {

    /*********** Logica di invio messaggi ************/ 
    
    // Setup di base
    var inputText = $('.input-message-text');
    var iconMicSend = $('.icon');

    inputText.on('focus', function () {
        iconMicSend.removeClass('fa-microphone').addClass('fa-paper-plane');
    });

    var messageBox = $('.message-box');
    
    iconMicSend.on('click', function() {
        var newInputText = inputText.val();
        var templateSendMessage = $('.template .template-message').clone();
        templateSendMessage.find('span:first-child').text(newInputText);
        messageBox.append(templateSendMessage);
        inputText.val('');
        iconMicSend.removeClass('fa-paper-plane').addClass('fa-microphone');
    });

    inputText.keyup(function (e) {   
        if ( e.which == 13 ) {
            var newInputText = inputText.val();
            inputText.val('');
            if ( newInputText !== '' ) {
                var templateSendMessage = $('.template .template-message').clone();
                templateSendMessage.find('span:first-child').text(newInputText);
                messageBox.append(templateSendMessage);
                iconMicSend.removeClass('fa-paper-plane').addClass('fa-microphone');
            }
        }
    });

}); // <--------------------- End Page

