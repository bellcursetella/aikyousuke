javascript: ((func, scr) => {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
    scr.onload = () => {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(($) => {
    "use strict";
    
    const pathname = location.pathname;
    if (pathname === "/baby/780/"){
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
        
        const degree = {};
        
        degree.list  = ['時を駆ける',
                        'ものすごい',
                        '心を病んだ',
                        'とれたて新鮮！',
                        '西洋骨董',
                        'くるしまぎれの',
                        'スタンディングオベーション',
                        '暴走',
                        'たまご風味の',
                        'LOVE＆',
                        '喰らえ！',
                        '部屋とTシャツと',
                        '凶器と化した',
                        '君に届け！この',
                        'アクロバティック',
                        'やさぐれ',
                        '壮絶なる',
                        'とぎれとぎれの',
                        '必殺',
                        'タイからやってきた',
                        '真夜中の',
                        'シャキッとした歯ごたえの',
                        'シャーマニック',
                        'アジア最強の',
                        '鋼鉄の',
                        'ＫＯ必死の',
                        '困った時の',
                        'ニードル',
                        'アマゾン奥地からやってきた',
                        'スラム街の',
                        'フルスイング',
                        'ハリケーン',
                        'こいつはうまい！',
                        '陰惨たる',
                        '地獄を見てきた',
                        'ファンタジック',
                        '真夜中の',
                        'レゲエ風の'];
        
        degree.list2 = ['思い出',
                        '奇跡',
                        '暗殺者',
                        'グッピー',
                        '烏龍茶',
                        '平和',
                        'マヨネーズ',
                        'ブルース',
                        'ファンタジスタ',
                        '顎',
                        '鼻フック',
                        '背泳ぎ',
                        'ひとりぼっち',
                        'ラッキーボーイ',
                        'コアラ',
                        '種田のガニ股打法',
                        '耳かき',
                        'キッズ',
                        '嵐',
                        '１１０番',
                        'シャンプー',
                        '妖精',
                        'コブラツイスト',
                        'もみあげ',
                        '天気予報',
                        'アサシン',
                        'スクールガール',
                        '赤信号',
                        'ユニフォーム姿',
                        'ポケットティッシュ',
                        '日記',
                        '放置自転車',
                        'ナイスガイ',
                        '心模様',
                        '金魚',
                        'パンダ',
                        'ＢＬＯＯＤ',
                        'バッティングセンター'];
        
        degree.total  = degree.list.length;
        degree.total2 = degree.list2.length;
        const r  = Math.randomInt(degree.total);
        const r2 = Math.randomInt(degree.total2);
        
        $('#text').text(degree.list[r] + degree.list2[r2]);
        localStorage.setItem("shogo", degree.list[r] + degree.list2[r2]);
    }
});