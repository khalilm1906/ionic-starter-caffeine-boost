var app = angular.module('caffeineboost.filters', []);

app.filter("join", function () {
	return function (arr, sep) {
		return arr.join(sep);
	};
});
