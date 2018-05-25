var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        // Cordova's device APIs have loaded and are safe/ready to access.
        this.receivedEvent('deviceready');
        // ... 
        document.getElementById("test").innerHTML = "The device is ready...";
        var p = require("render");
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();