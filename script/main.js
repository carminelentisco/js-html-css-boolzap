jQuery(document).ready(function($) {

    var messageTextBar = $('.input-message-text');
    var iconMicSend = $('.icon');

    messageTextBar.on('click', function() {
        
        iconMicSend.removeClass('fa-microphone').addClass('fa-paper-plane');

    });

    var messageBox = $('#message-box');

    iconMicSend.on('click', function() {

        var messageText = messageTextBar.val();
        var myMessageTemplateClone = $('.template-my-message').clone()
        
        // Modifica del clone
        myMessageTemplateClone.find('.text-message p').text(messageText);

        messageBox.append(myMessageTemplateClone);

        messageTextBar.val('');

    } );

    

}); // <--------------------- End Page
