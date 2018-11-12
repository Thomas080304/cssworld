define([
	'mock'
],function(Mock){
	
	Mock.mock('/api/login','post',function(config){
		return {name:'thomas',age:30,home:'www.baidu.com'}
	})
	
	return Mock;
});