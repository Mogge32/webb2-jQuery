$(function(){
    var txt = $("<h1></h1>").text("lite text");
    $('p').before(txt);
    txt = $("<p></p>").text("lite mera text");
    $('p').after(txt);
});