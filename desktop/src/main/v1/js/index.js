function init(){
	var HF = window.haifeng;
	var desktop = new HF.Desktop("desktop");
	var icon;
	var subWindowFeature = "left=100,top=100,width=1000,height=500";
	
	//add skype
	var onclickfunction = function(){
		window.open("http://www.skype.com","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Skype",
			"icon":"../image/icon/skype.png",
			"callback":onclickfunction
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add chrome
	var callback = function(){
		window.open("http://www.chrome.com","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Chrome",
			"icon":"../image/icon/chrome.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);

	//add iPad
	var callback = function(){
		window.open("http://www.apple.com","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Ipad",
			"icon":"../image/icon/iPad.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add Android
	var callback = function(){
		window.open("http://www.android.com","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Android",
			"icon":"../image/icon/android.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add Java
	var callback = function(){
		window.open("http://www.java.com","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Java",
			"icon":"../image/icon/java.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add jquery
	var callback = function(){
		window.open("http://www.jquery.com","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Jquery",
			"icon":"../image/icon/jquery.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add JS
	var callback = function(){
		window.open("http://www.w3school.com.cn/","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"JS",
			"icon":"../image/icon/JS.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add Css
	var callback = function(){
		window.open("http://www.w3school.com.cn/","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Css",
			"icon":"../image/icon/css.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add php
	var callback = function(){
		alert("php");
	};
	var iconOpt={
			"text":"PHP",
			"icon":"../image/icon/php.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
	//add SQL
	var callback = function(){
		window.open("http://www.w3school.com.cn/","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"SQL",
			"icon":"../image/icon/sql.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	//add Struts
	var callback = function(){
		window.open("http://www.w3school.com.cn/","",subWindowFeature,false);
	};
	var iconOpt={
			"text":"Struts",
			"icon":"../image/icon/struts.png",
			"callback":callback
	};
	icon = new HF.Icon(iconOpt);
	desktop.addIcon(icon);
	
};

window.onload=init;