var socket = io();

    socket.on('connect', function (){
        console.log('Connected to server');
    });

    socket.on('disconnect', function () {
        console.log('Disconnected from server');
    });

    socket.on('newMessage', function (message){
        console.log('newMessage', message);
        var li = jQuery('<li></li>');
        li.text(`${message.from}: ${message.text}`);

        jQuery('#messages').append(li);
    });


    socket.on('newLocationMessage', function(message) {
        var li = jQuery('<li></li>');
        var a = jQuery('<a target="_blank">My current location</a>');

        li.text(`${message.from}: `);
        a.attr('href', message.url);
        li.append(a);
        jQuery('#messages').append(li);
    });

    // socket.emit('createMessage', {
    //     from: 'Tony',
    //     text: 'Hi'
    // }, function (data){
    //     console.log('Got it', data);
    // });

    jQuery('#message-form').on('submit', function(e){
        e.preventDefault();

        socket.emit('createMessage', {
            from: 'User',
            text: jQuery('[name=message]').val()
        }, function (){
            jQuery('[name=message]').val('');
        });
    });

    var locationButton = jQuery('#send-location');
    locationButton.on('click', function () {
        if (!navigator.geolocation) {
            return alert('Geolocation not supportd');
        }

        navigator.geolocation.getCurrentPosition(function(position){
            socket.emit('createLocationMessage', {
                latitude: position.coords.latitude,
                longtitude: position.coords.longitude
            });
        }, function (){
            alert('Unable to fecth location')
        });
    });