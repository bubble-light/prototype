window['haifeng']=window['haifeng']||{};
(function(HF,$){
	
	HF.DesktopOptions = function(opts){
		opts = opts||{};
		this.width= opts['width']||"800px";
		this.height = opts['height']||"600px";
	};
	
	HF.Icon = function(opts){
		opts = opts||{};
		this.width=opts['width']||"50px";
		this.height = opts['height']||"50px";
		this.url = opts["icon"];
		this.callback = opts["callback"];
		var img = document.createElement("img");
		img.style.cssText = "position:absolute;border:none;padding:0;margin:0;"+"width:"+this.width+";height:"+this.height;
		img.src = this.url;
		//img.onclick=opts["callback"];
		$.addEventListener(img,"click",this.callback);
		return img;
	};
	
	HF.Desktop = HF.Class.extend({
		parent : null,
		_options : null,
		_iconCount:0,
		initialize : function(parent, opts) {
			if (typeof parent == 'string') {
				parent = document.getElementById(parent);
			}
			if(!parent){
				console.log("Please indicate the element!");
				return;
			}
			this.parent = parent;
			this._options = new HF.DesktopOptions(opts);
			this._options.width = this._options.width||parent.clientWidth;
			this._options.height = this._options.height||parent.clientHeight;
			
			this.addDefaultIcon();
			
		},
		addDefaultIcon:function(){
			var onclickfunction = function(){
				alert("skype");
			};
			var iconOpt={
					"icon":"../image/skype.png",
					"callback":onclickfunction
			};
			var skype = new HF.Icon(iconOpt);
			this.render(skype);
			
		},
		addIcon: function(iconEl){
			

			this.render(iconEl);
			
		},
		
		render: function(el){
			var style = el.style;
			style.left="10px";
			style.top=50*this._iconCount+'px';
			this.parent.appendChild(el);
			this._iconCount++;
		}
		
	});
	
})(haifeng,haifeng.Utils);