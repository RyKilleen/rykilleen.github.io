var comingSoon = {

	lastPeriod: $('.last-period'),

	init : function() {
		comingSoon.interval = setInterval(comingSoon.toggleOpacity, 1000);
	},

	toggleOpacity : function () {
		comingSoon.lastPeriod.toggleClass('hide');
	}
}

$(document).ready(function() {
	comingSoon.init();
})