window['haifeng']=window['haifeng']||{};
(function(HF,$){
	
	HF.DesktopOptions = function(opts){
		opts = opts||{};
		this.width= opts['width']||"800px";
		this.height = opts['height']||"600px";
	};
	
	HF.Icon = function(opts){
		opts = opts||{};
		this.width=opts['width']||"32px";
		this.height = opts['height']||"32px";
		this.url = opts["icon"];
		this.callback = opts["callback"];
		this.text = opts['text']||"text";
	};
	
	HF.Desktop = HF.Class.extend({
		parent : null,
		_options : null,
		_iconCount:0,
		_shotcutLeft:20,
		_shotcutTop:20,
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
			
			$.addClass(this.parent,"desktop");
			
			var ul = document.createElement("ul");
			ul.setAttribute("id", "iconUL");
			this.parent.appendChild(ul);
			
			$.addEventListener(window,"resize",this.resize);
			
			//this.addDefaultIcon();
			
		},
		addDefaultIcon:function(){
			var onclickfunction = function(){
				alert("skype");
			};
			var iconOpt={
					"text":"Skype",
					"icon":"../image/icon/skype.png",
					"callback":onclickfunction
			};
			var skype = new HF.Icon(iconOpt);
			this.render(skype);
			
		},
		addIcon: function(iconEl){
			this.render(iconEl);
		},
		
		render: function(el){
			var ul = document.getElementById("iconUL");
			
			var li = document.createElement("li");
			//li.style.cssText = "left:20px;top:20px;";
			
			var left = this._shotcutLeft;
			var top = this._shotcutTop ;
			
			li.style.left=left+"px";
			li.style.top=top+"px";
			
			//li.setAttribute("shotcut", this._iconCount);
			
			//this._iconCount++;
			this.calNextPos();

			
			var img = document.createElement("img");
			//img.style.cssText = ""+"width:"+el.width+";height:"+el.height;
			img.src = el.url;
			li.appendChild(img);
			var span = document.createElement("span");
			span.innerHTML = el.text;
			li.appendChild(span);
			
			var em = document.createElement("em");
			li.appendChild(em);
			
			$.addEventListener(li,"click",el.callback);
			
			ul.appendChild(li);
		},
		
		calNextPos:function(){
			var left = this._shotcutLeft;
			var top = this._shotcutTop ;
			if(top+90+57> this.parent.clientHeight){
				this._shotcutLeft=left+90;
				this._shotcutTop=20;
			}else{
				this._shotcutLeft = left;
				this._shotcutTop = top+90;
			}
			
		},
		resize:function(){
			console.log('resize');
			var top = 20;
			var left = 20;
			var liEls = document.getElementById("iconUL").childNodes;
			var desktop = document.getElementById("desktop");
			for ( var i = 0; i < liEls.length; i++) {
				console.log(left);
				console.log(top);
				console.log(i);
				console.log(liEls.item(i).innerHTML);
				liEls.item(i).style.left=left +"px";
				liEls.item(i).style.top=top+"px";
				
				if(top+90+57> desktop.clientHeight){
					left += 90;
					top = 20;
				}else{
					top += 90;
				}
			}
		},
		log:function(){
			console.log("log");
		}
		
	});
	
})(haifeng,haifeng.Utils);