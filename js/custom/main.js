$(document).ready(function() {

    $("#flash-msg").delay(3000).fadeOut("slow");

    $('#DiscordModal').modal('show');
    $('#helpUsModal').modal('show');
    $('#nameColor2').hide();
    $('#nameColor3').hide();
    $('#nameColor4').hide();
    $('#nameColor5').hide();

    $('select').on('change', function() {

        if (this.value == 1) {
            $('#nameColor1').show();
        } else {
            $('#nameColor1').hide();
        }

        if (this.value == 2) {
            $('#nameColor2').show();
        } else {
            $('#nameColor2').hide();
        }

        if (this.value == 3) {
            $('#nameColor3').show();
        } else {
            $('#nameColor3').hide();
        }

        if (this.value == 4) {
            $('#nameColor4').show();
        } else {
            $('#nameColor4').hide();
        }

        if (this.value == 5) {
            $('#nameColor5').show();
        } else {
            $('#nameColor5').hide();
        }

    });



    $('#sendPoints').submit(function(event) {

        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: 'tools/index.php?sendPoints',
            data: $(this).serialize(),
            success: function(data) {
                $('#message').html(data);
            }
        })


    });

});


var instanse = false;
var chatTimeout = 1;


$('#sendMsg').submit(function(event) {

    event.preventDefault();
    var chat = document.getElementById("chat").value;
    var username = document.getElementById("username").value;

    if (chatTimeout == 1) {

        $.ajax({
            type: 'POST',
            url: 'chat/index.php',
            data: {
                username: username,
                chat: chat
            },
            success: function(data) {

                if (data.includes("chat timeout")) {

                    chatTimeout = 2;
                    $('#statusMsg').html("<small>Timeout</small>");

                } else {

                    $('#statusMsg').html(data);
                    chatTimeout = 1;
                }

            }
        })

    }

    $("#sendMsg")[0].reset();
});

reloadinfo();

window.onload = function onLoad() {
    setInterval("reloadinfo()", 1000);
};


function reloadinfo() {

    if (chatTimeout == 1) {

        if (!instanse) {

            $.ajax({
                type: "GET",
                url: "chat/index.php?getChatMessagesBeta",
                dataType: "json",
                success: function(data) {


                    if (data) {

                        var obj = data;

                        $.each(obj, function(propName, propVal) {

                            $.each(propVal, function(tag, value) {

                                if ($('#' + propVal['id'] + '').length == 0) {

                                    if (propVal['msg'].includes("chat timeout")) {

                                        $('#getChatMessages').append($('<div id="' + propVal['id'] + '"></div>'));
                                        document.getElementById('getChatMessages').scrollTop = document.getElementById('getChatMessages').scrollHeight;

                                    } else {

                                        $('#getChatMessages').append($('<div id="' + propVal['id'] + '"></div>' + propVal['msg'] + ''));
                                        document.getElementById('getChatMessages').scrollTop = document.getElementById('getChatMessages').scrollHeight;

                                    }



                                }


                            });


                        });


                    }


                    instanse = false;


                }

            });
        }

    }

}