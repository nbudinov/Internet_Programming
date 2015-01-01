$(document).ready(function()		
{
	"use strict"

	
	var json = ('http://jsonplaceholder.typicode.com');
	
//tast 2
	
	console.log($("#footer a:first").attr("title"));
	
//task 3
	
	console.log($("#col1 p").text());
	
//task 4
	
	//$("#menu-top-level-menu ").append('<li> <a> NewButton </a> </li> ')
	//9nth commit
	$("#menu-top-level-menu ").append('<li id="newbutID"> <a> New	Button </a> </li> ')

	
// task 5
	
	$("div#footer").prepend('<div id="dynamiccontent"></div>');
	
//task 6
	
	$("#dynamiccontent").append('<input id= "textinput"> </input>');
	
//task 7
	
	$("#dynamiccontent").append('<button id="addbutton">Submit</button>');
	
//task 8
	
	$("#dynamiccontent").append('<ul id= "posts"></ul>');
	
//task 9
	
//	$("#newbutID a:first").click(function()
//	{
//		alert("Hello World");		
//	});
	
//task 10
	
	$("#newbutID a:first").click(function()
	{
		var col = $("#col1").replaceWith();
		$("#col2").after($(col));
		
	});

//task 11
	
	for(var i = 1; i <= 5; i++)	{
		$.ajax(json+"/posts/" + i,
		{
		method: "GET"
	}).then(function(data)
		{
			$('#posts').append('<li>' + data.title /*data.body ..*/ + '</li>');
		});
	}
	
//task 12
/*
	$('#addbutton').click(function()
	{
		if($('input#textinput').val() === '') 
			alert("You must enter text");
	});
*/
	
//task 13
/*	
	$('#addbutton').click(function()
			{
				if($('input#textinput').val() === '') 
					alert("You must enter text");
				else
				{
			//		$.post(json+"/posts", $('#textinput').val());
					
					$.ajax({
						type: "POST",
						url: json+"/posts",
						data: $('#textinput').val(),
						success: alert("It sent successfuly")
					});
				}
			});
*/
	
//task 14
/*
	$('#addbutton').click(function()
			{
				if($('input#textinput').val() === '') 
					alert("You must enter text");
				else
				{
					$.post(json+"/posts", { 
						userId: 10,
						body: $('#textinput').val()						
					},
					function(par)
					{
						$.get(json+"/posts"+par.id, function(data)
						{
							$("#posts").append("<li>" + par.body + "</li>");
						});		
					})		
				}
			});
*/

//task 15
/*
	$('#addbutton').click(function()
				{
					if($('input#textinput').val() === '') 
						alert("You must enter text");
					else
					{
						$.post(json+"/posts", { 
							userId: 10,
							body: $('#textinput').val()						
						},
						function(par)
						{
							$.get(json+"/posts"+par.id, function(data)
							{
								var $ulLi = $("<li>" + par.body + "</li>")
								
								var $butt = $('<button> X </button>').click(function(){
									alert('deleting');
								});
								
								$ulLi.append($butt);
								
								$("#posts").append($ulLi);								
							});		
						})		
					}
				});
*/
	
//task 16

	$('#addbutton').click(function()
			{
				if($('input#textinput').val() === '') 
					alert("You must enter text");
				else
				{
					$.post(json+"/posts", { 
						userId: 10,
						body: $('#textinput').val()		
					},
					function(par)
					{
						console.log(par.id);
						$.get(json+"/posts"+par.id, function(data)
						{
							var $ulLi = $("<li>" + par.body + "</li>")
							
							var $butt = $('<button> X </button>').click(function(){
								alert('deleting');
								var ok = confirm('Del ?');
								if (ok == true)
								{
									$.ajax({
										type: "DELETE",
										url: json+"/posts/" + par.id,
										success: $ulLi.remove()
									});
								}
							});
							$ulLi.append($butt);
							
							$("#posts").append($ulLi);								
						});		
					})		
				}
			});

	
//task 17
	
	$('#posts').before('<input id="field"> </input>');
	
//task 18	
/*
	$('#field').change(function(){
		var $fieldVal = $('#field').val();
		if( $fieldVal !== '' )
		{
			console.log($fieldVal);
			$.get(json + '/posts?userId=' + $fieldVal, function(data)
			{
				for (var it = 0; it < data.length; it++) 
				{
					$('#posts').append('<li>' + data[it].title + '</li>');					
				}
			});		
		}
	});
*/
	
//task 19
/*
	$('#field').change(function(){
		var $fieldVal = $('#field').val();
		if( $fieldVal !== '' )
		{
			console.log($fieldVal);
			$.get(json + '/posts?userId=' + $fieldVal, function(data)
			{
				$('#posts').empty();
				for (var it = 0; it < data.length; it++) 
				{
					$('#posts').append('<li>' + data[it].title + '</li>');					
				}
			});		
		}
	});
*/
//task 20
		
	$('#field').change(function(){
		var $fieldVal = $('#field').val();
		if( $fieldVal !== '' )
		{
			console.log($fieldVal);
			$.get(json + '/posts?userId=' + $fieldVal, function(data)
			{
				$('#posts').empty();
				for (var it = 0; it < data.length; it++) 
				{
					var $ulLi = $('<li>' + data[it].title + '</li>');
					
					var $butt = $('<button> X </button>').click(function(){
						alert('deleting');
						var ok = confirm('Del ?');
						if (ok == true)
						{
							$.ajax({
								type: "DELETE",
								url: json+"/posts/" + $fieldVal,
								success: $butt.parent().remove()
							});
						}
					});
					
					$ulLi.append($butt);

					$('#posts').append($ulLi);					
				}
			});			
		}
	});
	
	
	
});




