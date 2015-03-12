(function() {
	
	function init() {
		var i = 0,
			speed = 300,
			easing = mina.backout,
			divs = document.querySelectorAll('#grid > a');

		for (i; i < divs.length; i++) {
			(function () {
				var element = divs[i],
				    s = Snap(element.querySelector('svg')), 
					path = s.select('path'),
					pathConfig = {
						from: path.attr('d'),
						to: element.getAttribute('data-path-hover')
					};

				element.addEventListener('mouseenter', function() {
					path.animate({'path': pathConfig.to}, speed, easing);
				});

				element.addEventListener('mouseleave', function() {
					path.animate({'path': pathConfig.from}, speed, easing);
				});
		        
		    }());
			
		}
	}

	init();

})();