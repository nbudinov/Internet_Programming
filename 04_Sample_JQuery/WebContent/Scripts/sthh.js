(function() {
	"use strict"  // IMPORTANT !!!!!!!!!
	
	var o = 1;
	alert("Hello world");
	
	var i;
	
	i = 1;
	
	i++;
	
	if(i === 1)
	{
		alert("TWO");
		
	}
	
	var array = [];
	array.push("Hellooo");
	array.push("hohoho");
	
	var o = {
			some: "value"	
	};
	
	alert(o.some);
	
	o.newField = "newValue";
	alert(o.newField);
	
	var otherObj = {};
	o.subObj = otherObj;
	o.subObj = 1;
	if(o.subObj.id === otherObj.id)
		{
			alert("TRUE");
		}
	
	var func = function()
	{
		alert("in func");
	}
	func();
	
	var withParams = function(name)
	{
		alert("Hello, " + name + arguments[0]);   // arguments v funkciqqq 
	}
	
	
	
})();