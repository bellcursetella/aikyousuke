javascript: ((func, scr) => {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    scr.onload = () => {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(($) => {
    "use strict";
    
    const moniker = localStorage.getItem("shogo");
    if (moniker == null){
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("iphone") !== -1 || userAgent.indexOf("ipad") !== -1){
            if (userAgent.indexOf("safari") !== -1 && userAgent.indexOf("chrome") == -1){
                $('#text').text("※現在お使いのブラウザでは称号が記録されません！※");
            } else {
                $('#text').text("※称号が登録されていません！");
            }
        } else {
            $('#text').text("※称号が登録されていません！");
        }
    } else if (moniker == ""){
        $('#text').text("※称号が登録されていません！");
    } else {
        $('#text').text(moniker);
        $('#text').append('<button type="button">test</button>');
    }
});