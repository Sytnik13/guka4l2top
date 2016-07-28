
'use strict';



$('#url').on('input', function() {

    if (!$(this).val().match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/)) {
        $('#alert-url').css({
            'visibility': 'visible'
        })
    } else {
        $('#alert-url').css({
            'visibility': 'hidden'
        })
    }

    if (!$(this).val()) {
        $('#alert-url').css({
            'visibility': 'hidden'
        })
    }
})

$('#email').on('input', function() {

    var emailRe = /^([\w\-_+]+(?:\.[\w\-_+]+)*)@((?:[a-z0-9\-]+\.)*[a-z0-9][a-z0-9\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!emailRe.test($(this).val() || '')) {
        $('#alert-email').css({
            'visibility': 'visible'
        })
    } else {
        $('#alert-email').css({
            'visibility': 'hidden'
        })
    }

    if (!$(this).val()) {
        $('#alert-email').css({
            'visibility': 'hidden'
        })
    }
})

$('#rates').on('input', function() {

    if ($(this).val() === '') {
        $('#alert-rates').css({
            'visibility': 'visible'
        })
    } else {
        $('#alert-rates').css({
            'visibility': 'hidden'
        })
    }
})

$('#date-button').click(function() {
    $('#alert-date').css({
        'visibility': 'hidden'
    })
})

$('#skype').on('input', function() {

    if ($(this).val() === '') {
        $('#alert-skype').css({
            'visibility': 'visible'
        })
    } else {
        $('#alert-skype').css({
            'visibility': 'hidden'
        })
    }
})
