/*--------------------------------------------------------------------------------------------------------------*/
/*                         jQuery - Get Content and Attributes - text(), html(), and val()                      */
/*--------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
	$("#btn-1").click(function() {
		alert("TEXT : " + $(".test").text());
	});
	$("#btn-2").click(function() {
		alert("HTML : " + $(".test").html());
	});

	$("#value-btn").click(function() {
		alert("VALUE : " + $(".test-value").val());
	});
	$("#href-btn").click(function() {
		alert($(".portfolio").attr("href"));
	});
});


/*--------------------------------------------------------------------------------------------------------------*/
/*                       jQuery - Set Content and Attributes - text(), html(), and val()                        */
/*--------------------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("Welcome!");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>Welcome! Mukesh");
    });
    $("#btn3").click(function(){
        $("#test3").val("Dolly Duck");
    });

    $("#text-btn").click(function(){
        $("#show-text").text(function(i, oldText){
            return "Old text: " + oldText + " New text: The new paragraph (index: " + i + ")"; 
        });
    });
    $("#html-btn").click(function(){
        $("#show-html").html(function(i, oldText){
            return "Old html: " + oldText + " New html: The old <b>paragraph</b> (index: " + i + ")"; 
        });
    });
});