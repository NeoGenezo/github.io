var anniversaries = [
/*
** Here you can add the annual events. The existing events are pretty
** instructive.
*/
    {"month":1,  "day":29, "description":"birthday of sister"},
    {"month":3,  "day":13, "description":"birthday of friend"},
    {"month":6,  "day":30, "description":"birthday of mama"},
    {"month":11,  "day":6,  "description":"birthday of niece"},
];

today = new Date()
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today_str = today.toLocaleDateString("en-GB", options).slice(0, -5)
$("#date").append(today_str);

var cur_day = today.getDate()
var cur_month = today.getMonth()
var flag = false
for (idx in anniversaries){
    if (anniversaries[idx].month == cur_month+1){
        if (anniversaries[idx].day == cur_day){
            flag = true
            $("#today-list").append("<li>"+anniversaries[idx].description+"</li>");
        }
    }
}

if (flag == false)
    $("#today").hide();

var cnt = 3
for (i = 1; cnt > 0 || i < 7; i++){
    date = new Date(new Date().getTime()+i*24*60*60*1000)
    var day = date.getDate()
    var month = date.getMonth()
    for (idx in anniversaries){
        if (anniversaries[idx].month == month+1){
            if (anniversaries[idx].day == day){
                cnt--
                if (i == 1){
                    var day_str = "tomorrow"
                }
                else if (i < 7){
                    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    var day_str = date.toLocaleDateString("en-GB", options).split(",")[0]
                }
                else{
                    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    var day_str = date.toLocaleDateString("en-GB", options).split(",")[1].slice(0, -5)
                }
                var day_str_decor = "<small>"+day_str+"</small>"
                $("#next-days-list").append("<li><span class=\"event\">"+anniversaries[idx].description+day_str_decor+"</span></li>");
            }
        }
    }
}
