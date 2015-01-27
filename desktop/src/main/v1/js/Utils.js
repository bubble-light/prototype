(function(HF){
	var $= HF.Utils={
		addEventListener : function(el, event, handler, useCapture) {
			if(el.addEventListener) {
				el.addEventListener(event, handler, useCapture || false);
			} else {
				el.attachEvent("on" + event, handler);
			}
			
		}
	};
})(haifeng);