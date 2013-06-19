define('module/m/b', function(require) {
	return function(c) {
		alert('moduleB加载成功，参数：' + c);
	}
});