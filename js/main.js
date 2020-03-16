$(document).ready(function() {

    $('.row .square').on('click', function(event) {

        callAjax($(this));


    })

    function callAjax(currObj) {
    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/random/int',
        method : 'GET',
        success: function(data) {
            console.log(data.response);
            currObj.html(data.response);

            if(data.response <= 5) {
                if(currObj.hasClass('green')) {
                    currObj.removeClass('green')
                }

                currObj.addClass('yellow');
            }
            else {
                if(currObj.hasClass('yellow')) {
                    currObj.removeClass('yellow')
                }
                currObj.addClass('green');
            }
        },
        error: function() {
        alert('Failed')
        }


    });

    }


})
