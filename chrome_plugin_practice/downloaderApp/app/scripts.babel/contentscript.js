'use strict';

$(function () {
    $('h4:last').after('<input type="button" id="slack_emoji_dl" class="btn btn_primary" value="Save all emoji">');
});

$(document).on('click', '#slack_emoji_dl', function () {
    alert('へろー、ゆめち');
});
