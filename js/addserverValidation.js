
'use strict';

var url = false;
var email = false;
var rates = false;
var date = false;
var skype = false;


$('#url').on('input', function() {

    if (!$(this).val().match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}\.[a-zA-Z]{2,}$/)) {
        url = false;
        buttonActive();
        $('#alert-url').css({
            'visibility': 'visible'
        })
    } else {
        url = true;
        buttonActive();
        $('#alert-url').css({
            'visibility': 'hidden'
        })
    }
})

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

$('#email').on('input', function() {

    var emailRe = /^([\w\-_+]+(?:\.[\w\-_+]+)*)@((?:[a-z0-9\-]+\.)*[a-z0-9][a-z0-9\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!emailRe.test($(this).val() || '')) {
        email = false;
        buttonActive();
        $('#alert-email').css({
            'visibility': 'visible'
        })
    } else {
        email = true;
        buttonActive();
        $('#alert-email').css({
            'visibility': 'hidden'
        })
    }
})

$('#rates').on('input', function() {

    if ($(this).val() === '') {
        rates = false;
        buttonActive();
        $('#alert-rates').css({
            'visibility': 'visible'
        })
    } else {
        rates = true;
        buttonActive();
        $('#alert-rates').css({
            'visibility': 'hidden'
        })
    }
})

$('#date-button').click(function() {
    date = true;
    buttonActive();
    $('#alert-date').css({
        'visibility': 'hidden'
    })
})

$('#skype').on('input', function() {

    if ($(this).val() === '') {
        skype = false;
        buttonActive();
        $('#alert-skype').css({
            'visibility': 'visible'
        })
    } else {
        skype = true;
        buttonActive();
        $('#alert-skype').css({
            'visibility': 'hidden'
        })
    }
})

function buttonActive() {
    if (url === true && email === true && rates === true && date === true && skype === true) {
        $('#submit').prop('disabled', false);
    } else {
        $('#submit').prop('disabled', true);
    }
}
