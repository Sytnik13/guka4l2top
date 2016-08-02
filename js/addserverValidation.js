$(document).ready(function () {
    'use strict';

    var url = false;
    var email = false;
    var rates = false;
    var date = false;
    var skype = false;
    var $captcha = $('#recaptcha')
    var response = grecaptcha.getResponse();

    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : event.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

    function ValidateForm() {
        var valid = true;

        if (!$('#MainContent_url').val().match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}\.[a-zA-Z]{2,}$/)) {
            console.log('url');
            valid = false;
        } else if (!$('#MainContent_email').val().match(/^([\w\-_+]+(?:\.[\w\-_+]+)*)@((?:[a-z0-9\-]+\.)*[a-z0-9][a-z0-9\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
            console.log('email');
            valid = false;
        } else if ($('#MainContent_rates').val() === '') {
            console.log('email');
            valid = false;
        } else if ($('#MainContent_skype').val() === '') {
            console.log('skype');
            valid = false;
        } else if (date !== true) {
            console.log('date');
            valid = false
        }

        return valid;
    }




    $('#submit').click(function () {
        var $captcha = $('#recaptcha'),
            response = grecaptcha.getResponse();

        if (response.length === 0) {
            console.log("ERROR");
        } else {
            console.log("OK");
        }
    })



    var buttonActive = function () {
        if (url == true && email == true && rates == true && date == true && skype == true) {
            $('#MainContent_AddSuggestionButton').attr('disabled', false);
        } else {
            $('#MainContent_AddSuggestionButton').attr('disabled', true);
        }
    };



    $('#MainContent_url').on('input', function () {

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

    $('#MainContent_email').on('input', function () {

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

    $('#MainContent_rates').on('input', function () {

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

    $('#date-button').click(function () {
        date = true;
        buttonActive();
        $('#alert-date').css({
            'visibility': 'hidden'
        })
    })

    $('#MainContent_skype').on('input', function () {

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
});
