(function () {

    "use strict";
    $(() => {

    $(document).ready(function() {

        $.ajax({
                'url':'/json/est_connecte.php',
                'method': $(this).attr('method'),
                'data': $(this).serialize()
            })
            .done(function (data) {

                if (!data.result){
                    $('#connexion').show();
                    //window.location.reload();
                }
                else
                    $('#deconnexion').show();
            })
            .fail(function () {
                alert ('fail');
            })

    });

    $('#connexion').submit(function () {
       $.ajax({
            'url':'/json/connexion.php',
            'method': $(this).attr('method'),
            'data': $(this).serialize()
        })
            .done(function (data) {

               // if (data.result)
                   $('#deconnexion').show();
                  //  window.location.reload();
                //console.log("connecte");
            })
            .fail(function () {
                alert ('fail');
            })




    });

    $('#deconnexion').submit(function () {

         $.ajax({
             'url':'/json/deconnexion.php',
             'method': $(this).attr('method'),
             'data': $(this).serialize()
         })
             .done(function (data) {
                 console.log("message");
                 if (data.result)
                    // $('#connexion').show();
                     window.location.reload();
                 console.log("deconnecte");
             })
             .fail(function () {
                 alert ('fail');
             })
    });
})

}) ();
