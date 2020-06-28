var ips = [
/*
** Here you can specify the images to download in order to check the
** internet connectivity. I advice you to add your on so that are closer
** to your location, are small enough and comply with your privacy
** policies.
*/
    "https://www.gnu.org/feed-icon-10x10.png", //469B
    "https://www.archlinux.org/static/rss.c5ebdc5318d6.png", //707B
    "https://www.debian.org/Pics/planet.png", //454B
    "https://lichess1.org/assets/images/favicon-32-white.png", //584B
    "http://mirrors.myaegean.gr/icons/blank.png", //227B
    // "https://www.csd.uoc.gr/CSD/images/bullet_en_gr.png", //133B too slow
    "https://webmail.auth.gr/apple-touch-icon-72x72-precomposed.png" //751B
    // "https://www.kernel.org/theme/images/logos/favicon.png" //3670B too big
];
var waittime = 1500;
function checkconnection(){
    var fadespeed = 300
    if (!navigator.onLine){
            $("#con-status").fadeIn(fadespeed);
    }else{
        var inUse = true;
        var ip = ips[Math.floor(Math.random()*ips.length)];
        var img = new Image();
        img.onload = function(){
            if (inUse){
                $("#con-status").fadeOut(fadespeed);
                inUse = false;
                img.src = "";
            }
        };
        img.onerror = function(e){
            if (inUse){
                $("#con-status").fadeIn(fadespeed);
                inUse = false;
                img.src = "";
            }
        };
        img.src = ip + "?d=" + escape(Date());
        setTimeout(function(){
            if (inUse){
                $("#con-status").fadeIn(fadespeed);
                inUse = false;
                img.src = "";
            }
        }, waittime);
    }
}

checkconnection();
var checking = setInterval(checkconnection, 5000);
setTimeout(function(){clearInterval(checking)}, 2*60*1000);

//The following code is used to debug faulty links
function checkIp(ip){
    clearInterval(checking);
    var inUse = true;
    var ip = ip;
    var img = new Image();
    img.onload = function(){
        if (inUse){
            console.info("success:", ip);
            inUse = false;
            img.src = "";
        }
    };
    img.onerror = function(e){
        if (inUse){
            inUse = false;
            img.src = "";
            console.error("error:", ip);
        }
    };
    img.src = ip + "?d=" + escape(Date());
    setTimeout(function(){
        if (inUse){
            console.error("timed out:", ip);
            inUse = false;
            img.src = "";
        }
    }, waittime);
}
function checkAll(){
    if (!navigator.onLine){
        console.error("offline");
    }else{
        for (var ind in ips){
            checkIp(ips[ind]);
        }
    }
}
