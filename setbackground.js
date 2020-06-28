var photos = [
/*
** Here you can add the description of your backgrounds. The existing
** descriptions are pretty instructive.
*/
    {"filename":"2",
    "description":"Skateboarding to the sunset.",
    "sidenote":"Thessaloniki, 16 of March 2019"},

    {"filename":"6",
    "description":"Hacking shit.",
    "sidenote":"Thessaloniki, 2 of January 2018"},

    {"filename":"29",
    "description":"Enipeas waterfalls.",
    "sidenote":"Olymbos, 25 of August 2019"},
    
    {"filename":"31",
    "description":"Small bonfire.",
    "sidenote":"Olymbos, 24 of August 2019"},

    {"filename":"34",
    "description":"Sunrise in Thessaloniki.",
    "sidenote":"Thessaloniki, 31 of August 2019"},

    {"filename":"37",
    "description":"City of Kerkira.",
    "sidenote":"Kerkira, 6 of October 2019"},
    
    {"filename":"39",
    "description":"Empty Kantouni.",
    "sidenote":"Kerkira, 6 of October 2019"},

    {"filename":"47",
    "description":"View.",
    "sidenote":"Olymbos, 28 of December 2019"},
];

$(document).ready(function(){
    var numOfIm = photos.length
    var random = Math.floor(Math.random()*numOfIm);
    var bg = photos[random];
    random = "url('backgrounds/"+bg["filename"]+"')";
    $("#page-bg").css("background-image", random);
    random = "url('blurbgs/"+bg["filename"]+"')";
    $(".section-bg").css("background-image", random);
    $("#background-info").append("<div>"+bg["description"]+"</div>");
    $("#background-info").append("<div id=sidenote>"+bg["sidenote"]+"</div>");
})
