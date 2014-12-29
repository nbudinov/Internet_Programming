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

	
});




