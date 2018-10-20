$(document).ready(function() {
	$(".paragraph").click(function() {
		$(this).hide();
	});
});


$(document).ready(function() {
	$("h3").dblclick(function() {
		alert("Mukesh Kumar");
	});
});


/*$(document).ready(function() {
	$(".text").mouseenter(function() {
		alert("jQuery Practice");
	});
});*/


$(document).ready(function() {
	$("#click-btn").click(function() {
		alert("Button Content");
	});
});


/*$(document).ready(function() {
	$("#hover").hover(function() {
		alert("Welcome !");
	},
	function() {
		alert("Bye Bye.");
	});
});*/


$(document).ready(function() {
	$("input").focus(function() {
		$(this).css("background-color", "aqua");
	});
	$("input").blur(function() {
		$(this).css("background-color", "red");
	});
});


/* The on() method attaches one or more event handlers for the selected elements. */
$(document).ready(function() {
    $("h1").on({
        mouseenter: function() {
            $(this).css("color", "red");
        },  
        mouseleave: function() {
            $(this).css("color", "green");
        }, 
        click: function() {
            $(this).css("color", "aqua");
        }  
    });
});


$(document).ready(function() {
	$("#hide").click(function() {
		$(".hide-show").hide(1000);
	});
	$("#show").click(function() {
		$(".hide-show").show(1000);
	});
});


$(document).ready(function() {
	$("#toggle-btn").click(function() {
		$(".toggle-text").toggle(1000);
	});
});


$(document).ready(function() {
	$("#fadeIn-btn").click(function() {
		$(".p1").fadeIn();
		$(".p2").fadeIn("slow");
		$(".p3").fadeIn(3000);
	});
});


$(document).ready(function() {
	$("#fadeOut-btn").click(function() {
		$(".fadeOut-1").fadeOut();
		$(".fadeOut-2").fadeOut("slow");
		$(".fadeOut-3").fadeOut(3000);
	});
});


$(document).ready(function() {
	$("#fadeToggle-btn").click(function() {
		$(".fadeToggle-1").fadeToggle();
		$(".fadeToggle-2").fadeToggle("slow");
		$(".fadeToggle-3").fadeToggle(3000);
	});
});

$(document).ready(function() {
	$("#fadeTo-btn").click(function() {
		$(".fadeTo-1").fadeTo("slow", 0.15);
		$(".fadeTo-2").fadeTo("slow", 0.4);
		$(".fadeTo-3").fadeTo("slow", 0.7);
	});
});