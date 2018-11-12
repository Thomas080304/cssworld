define([
	'jquery',
	'cookie',
	'mustache',
	'backbone',
	'mock'
],function($,Cookies,Mustache,Backbone,Mock){

	var Router = Backbone.Router.extend({
		routes: {
			"list":"list",
			"detail/:id":"detail",
			"about":"about",
			"":"dash"
		},
		list:function(){
			require([
				'app/login/login'
			],function(login){
				$('#app').html(login.render())
				login.getData()
				.then(function(data){
					$('#app').html(login.render())
				});
			});
		},
		detail:function(){
			$('#app').empty();
		},
		about:function(){
			$('#app').empty();
		},
		dash:function(){
			$('#app').empty();
		}
	});
	var router = new Router();
	Backbone.history.start({hashChange: true});
});