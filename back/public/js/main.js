$(document).ready(function () {
    if (window.location.hash == "") window.location.hash = "/home"

    if (localStorage.getItem('token')) {
        $('.logout').show()
    }

    // Disconnect the user
    $('.logout').click(function () {
        localStorage.removeItem('token')
        M.toast({html: 'You are now offline', classes: 'green'})

        $('.logout').fadeOut(200)

        var hash = window.location.hash.replace(/^#\//, '' ),
            hashSplitted = hash.split('/'),
            route = $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2]);

        if (route.data('token') == true) {
            route.find('.formParams').fadeOut(200)
            route.find('.formRequestBody').fadeOut(200)
            route.find('.formLogin').fadeIn(200)
        }
    })

    // Login the user before try the routes
    $('.login').click(function () {
        var hash = window.location.hash.replace(/^#\//, '' ),
            hashSplitted = hash.split('/'),
            route = $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2]);

        $.ajax({
            type: 'POST',
            url: 'auth',
            data: {
                email: route.find('.formLogin input[name=email]').val(),
                password: route.find('.formLogin input[name=password]').val()
            },
            success: function (res) {
                M.toast({html: 'Success login', classes: 'green'})

                localStorage.setItem('token', res.data.token)
                route.find('.formLogin').fadeOut(200)
                route.find('.formParams').fadeIn(200)
                route.find('.formRequestBody').fadeIn(200)
                $('.logout').fadeIn(200)
            },
            error: function (res) {
                M.toast({html: 'Bad login', classes: 'red'})
            }
        });
    })

    // Init side nav
    $('.sidenav').sidenav({
        draggable: true
    });

    // Init  collapsible
    $('.collapsible').collapsible();

    // Init tooltip
    $('.tooltipped').tooltip()

    // Switch page at load
    switchPage();

    // Switch page on hash change
    window.onhashchange = function () {
        switchPage();
    }

    function switchPage() {
        var hash = window.location.hash.replace(/^#\//, '' ),
            hashSplitted = hash.split('/')

        switch (hashSplitted[0]) {

            case 'reference':
                $('.page:not(#reference)').fadeOut(200, function () {
                    $('#reference').fadeIn(200)
                })

                switchReference(hashSplitted)
                break

            case 'try-route':
                $('.page:not(#try-route)').fadeOut(200, function () {
                    $('#try-route').fadeIn(200)
                })

                switchReference(hashSplitted)


                // Show form login if the user doesn't logged
                var route = $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2]);

                if (localStorage.getItem('token') == undefined && route.data('token') == true) {
                    route.find('.formParams').fadeOut(200)
                    route.find('.formRequestBody').fadeOut(200)
                    route.find('.formLogin').fadeIn(200)

                } else { // Else show the forms of params and requests (if is require)
                    route.find('.formLogin').fadeOut(200)
                    route.find('.formParams').fadeIn(200)
                    route.find('.formRequestBody').fadeIn(200)
                }
                break

            default:
                $('.page:not(#'+ hashSplitted[0] +')').fadeOut(200, function () {
                    $('#'+ hashSplitted[0]).fadeIn(200)
                })

        }
    }

    function switchReference(hashSplitted) {

        $('.reference:not(.'+ hashSplitted[1] +')').fadeOut(200, function () {
            $('.reference.'+hashSplitted[1]).fadeIn(200)
        })

        if (hashSplitted.length > 2) {
            $('.route:not(.'+ hashSplitted[2] +')').fadeOut(200).promise().done(function () {
                $('.route.'+hashSplitted[2]).fadeIn(200)

                $('.reference.'+ hashSplitted[1] +' .requests .'+ hashSplitted[2]).addClass('active')
            })
        }

    }

    // Launch the query of the route
    $('#try-route .launch').click(function () {
        var hash = window.location.hash.replace(/^#\//, '' ),
            hashSplitted = hash.split('/')

        // Set params in the url
        var endpoint = $(this).data('endpoint'),
            formParams = $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2] +' .formParams input'),
            formRequestBody = $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2] +' .formRequestBody input');

        for (var i = 0; i < formParams.length; i++) {
            endpoint = endpoint.replace(':'+formParams.eq(i).attr('name'), formParams.eq(i).val())

            // reset
            formParams.eq(i).val('')
        }

        var data = {}
        for (var i = 0; i < formRequestBody.length; i++) {
            data[formRequestBody.eq(i).attr('name')] = formRequestBody.eq(i).val()

            // reset
            formRequestBody.eq(i).val('')
        }

        // For reset (remove active on labels)
        M.updateTextFields();

        $.ajax({
            type: $(this).data('method'),
            url: endpoint,
            headers: {
                'X-Auth-Token': localStorage.getItem('token'),
            },
            data: data,
            success: function (res) {
                showRes(res)
            },
            error: function (res) {
                showRes(res.responseJSON)
            }
        });

        function showRes(res) {
            $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2] +' .json').fadeIn(200)
            $('#try-route .'+ hashSplitted[1] +' .'+ hashSplitted[2] +' .json code').html(JSON.stringify(res, null, 4))

            // Init prism highlight
            Prism.highlightAll();
        }
    })
})
