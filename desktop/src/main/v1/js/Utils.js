(function(HF) {
	var $ = HF.Utils = {
		addEventListener : function(el, event, handler, useCapture) {
			if (el.addEventListener) {
				el.addEventListener(event, handler, useCapture || false);
			} else {
				el.attachEvent("on" + event, handler);
			}

		},

		hasClass : function(ele, cls) {
			return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		},

		addClass : function(ele, cls) {
			if (!this.hasClass(ele, cls))
				ele.className += "" + cls;
		},

		removeClass : function(ele, cls) {
			if (hasClass(ele, cls)) {
				var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
				ele.className = ele.className.replace(reg, ' ');
			}
		}

	};
})(haifeng);