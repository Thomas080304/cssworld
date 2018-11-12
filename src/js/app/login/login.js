define([
	"i18n!./nls/colors",
	"text!./templates/test",
	"mustache"
],function(colors,template,Mustache){
	//$('#app').html(mustache.render(template,colors));
	function Login(){
		this.cache = $.extend({name:'',age:'',home:''},colors);
	}
	Login.prototype = {
		constructor:Login,
		render:function(){
			return Mustache.render(template,this.cache)
		},
		getData:function(){
			var that = this;
			return $.post(
				'/api/login',
				{name:'thomas',password:'password'}
			)
			.then(function(data){
				$.extend(that.cache,JSON.parse(data));
			});
		}
	};
	return new Login();
});