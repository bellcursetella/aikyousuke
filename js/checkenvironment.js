javascript: ((func, scr) => {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    scr.onload = () => {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(($) => {
    "use strict";
    
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("iphone") !== -1 || userAgent.indexOf("ipad") !== -1){
        if (userAgent.indexOf("safari") !== -1 && userAgent.indexOf("chrome") == -1 && userAgent.indexOf("crios") == -1){
            $('#text').text("※現在お使いの端末、ブラウザでは遊ぶことができません！※");
        }
    }
});