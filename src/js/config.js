requirejs.config({
    baseUrl: './src/js/lib',
    paths: {
        app: '../app',
        ui: '../ui'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        cookie:{
            exports:'Cookies'
        },
        mustache:{
            exports:'Mustache'
        },
        mock:{
            exports:'Mock'
        }
    }
});
