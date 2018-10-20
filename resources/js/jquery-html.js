$(document).ready(function() {
	$("#btn-1").click(function() {
		alert("TEXT : " + $(".test").text());
	});
	$("#btn-2").click(function() {
		alert("HTML : " + $(".test").html());
	})
});


$(document).ready(function() {
	$("#value-btn").click(function() {
		alert("VALUE : " + $(".test-value").val());
	});
});


$(document).ready(function() {
	$("#href-btn").click(function() {
		alert($(".portfolio").attr("href"));
	});
});