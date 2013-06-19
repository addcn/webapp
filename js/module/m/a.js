define('module/m/a', function(require) {
	var $ = require('$');
	return function(c) {
		alert('moduleA加载成功，参数：' + $.param(c));
	}
});