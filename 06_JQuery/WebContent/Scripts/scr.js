$(document).ready(function()		
{
	"use strict"

	
	var json = ('http://jsonplaceholder.typicode.com');
	
//tast 2
	
	console.log($("#footer a:first").attr("title"));
	
//task 3
	
	console.log($("#col1 p").text());
	
//task 4
	
	$("#menu-top-level-menu ").append('<li id="newbutID"> <a> New Button </a> </li> ')

// task 5
	
	$("div#footer").prepend('<div id="dynamiccontent"></div>');

//task 6
		
	$("#dynamiccontent").append('<input id= "textinput"> </input>');

//task 7
	
	$("#dynamiccontent").append('<button id="addbutton">Submit</button>');

//task 8
	
	$("#dynamiccontent").append('<ul id= "posts"></ul>');

//task 9
	
	$("#newbutID a:first").click(function()
	{
		alert("Hello World");		
	});

//task 10
	
	$("#newbutID a:first").click(function()
	{
		var col = $("#col1").replaceWith();
		$("#col2").after($(col));
		
	});
	
	
});




