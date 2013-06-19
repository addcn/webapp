define('module/demo/index', function(require) {
	require('/webapp/css/demo.css');
	var $ = require('$'),
		_ = require('underscore'),
		tmpl = require('/webapp/tmpl/demo.html'),
		tp = _.template(tmpl),
		arr = [1,2,3,4,5,6,7,8,9],
		render = function(arr) {
			$('#container').html(tp({data: arr}));
			$('#btn-sort-asc').click(function() {
				render(arr.sort());
			});
			$('#btn-sort-desc').click(function() {
				render(arr.sort().reverse());
			});
			$('#btn-shuffle').click(function() {
				render(_.shuffle(arr));
			});
		};
	return function() {
		render(arr);
	}
});