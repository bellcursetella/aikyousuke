javascript: ((func, scr) => {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(($) => {
    "use strict";
    
    const nextUInt = function() {
        let x = Math.floor(Math.random() * 1000000000);
        let y = Math.floor(Math.random() * 1000000000);
        let z = Math.floor(Math.random() * 1000000000);
        let w = Math.floor(Math.random() * 100000000);
        const t = x ^ x << 11;
        x = y;
        y = z;
        z = w;
        w = (w ^ w >>> 19) ^ (t ^ t >>> 8);
        
        const result = w >>> 0;
        return result / 4294967296;
    };
    
    Math.randomInt = function(max) {
        return Math.floor(max * nextUInt());
    };    
    
    const imgUrl = '../../pic/780/';
    const imgList = ['lba2121.jpg', 'rngif1.gif', 'moa3.jpg', 'kda5.jpg', 'ssa1.jpg',
                     'lba8.jpg', 'aca1.jpg', 'kda4.jpg', 'kma2.jpg', 'kma1.jpg',
                     'anime0301.jpg', 'animeex1.jpg', 'komaria01.jpg', 'anime15n01.jpg', 'rna4.jpg',
                     'hra3.jpg', 'kda6.jpg', 'kma8.jpg', 'kdg1.gif', 'rna3.jpg',
                     'hra2.jpg', 'lba10.jpg', 'yka3.jpg', 'moa2.jpg', 'rna2.jpg',
                     'lba9.jpg', 'moa1.jpg', 'kna2.jpg', 'kga1.jpg', 'rna1.jpg',
                     'kda3.jpg', 'hra1.jpg', 'kna1.jpg', 'kma6.jpg', 'kmrna1.jpg',
                     'msa2.jpg', 'kya1.jpg', 'kma4.jpg', '79942.jpg', 'lba7.jpg',
                     'lba6.jpg', 'lba5.jpg', 'lba4.jpg', 'lba3.jpg', 'lba2.jpg',
                     'lba1.jpg', 'yka2.jpg', 'kda2.jpg'];
    const imgCount = imgList.length;
    const r = Math.randomInt(imgCount);
    const output = imgUrl + imgList[r];
    $('.baby_pic').attr('src', output);
});