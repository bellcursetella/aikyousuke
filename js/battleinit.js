javascript: ((func, scr) => {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    scr.onload = () => {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(($) => {
    "use strict";
    
    const nextUInt = () => {
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
    
    Math.randomInt = max => {
        return Math.floor(max * nextUInt());
    };

    const arrayShuffle = ([...array]) => {
        for (let i = array.length - 1; i >= 0; --i){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const member = ["棗 恭介", "直枝 理樹", "棗 鈴", "井ノ原 真人", "宮沢 謙吾",
                    "神北 小毬", "来ヶ谷 唯湖", "三枝 葉留佳", "能美 クドリャフカ",
                    "西園 美魚","二木 佳奈多","笹瀬川 佐々美","朱鷺戸 沙耶"];
    const shuffleMember = arrayShuffle(member);
    localStorage.setItem("rank1", shuffleMember[0]);
    localStorage.setItem("rank2", shuffleMember[1]);
    localStorage.setItem("rank3", shuffleMember[2]);
    localStorage.setItem("rank4", shuffleMember[3]);
    localStorage.setItem("rank5", shuffleMember[4]);
    localStorage.setItem("rank6", shuffleMember[5]);
    localStorage.setItem("rank7", shuffleMember[6]);
    localStorage.setItem("rank8", shuffleMember[7]);
    localStorage.setItem("rank9", shuffleMember[8]);
    localStorage.setItem("rank10", shuffleMember[9]);
    localStorage.setItem("rank11", shuffleMember[10]);
    localStorage.setItem("rank12", shuffleMember[11]);
    localStorage.setItem("rank13", shuffleMember[12]);
    localStorage.setItem("rank14", "あなた");

    const str = Math.randomInt(12) + 28;
    const hp = Math.randomInt(12) + 28;
    const agi = Math.randomInt(12) + 28;
    const avo = Math.randomInt(12) + 28;
    const dex = Math.randomInt(12) + 28;
    const int = Math.randomInt(12) + 28;
    const luk = 60;

    $('#str').text(str);
    $('#hp').text(hp);
    $('#agi').text(agi);
    $('#avo').text(avo);
    $('#dex').text(dex);
    $('#int').text(int);
    $('#luk').text(luk);

    localStorage.setItem("pstr", str);
    localStorage.setItem("php", hp);
    localStorage.setItem("pagi", agi);
    localStorage.setItem("pavo", avo);
    localStorage.setItem("pdex", dex);
    localStorage.setItem("pint", int);
    localStorage.setItem("pluk", luk);

    const lv = 1;
    localStorage.setItem("plv", lv);

    localStorage.setItem("pitem1", "なし");
    localStorage.setItem("pitem2", "なし");
    localStorage.setItem("pitem3", "なし");
    localStorage.setItem("myrank", "13");
    localStorage.setItem("myitem", "0");
});