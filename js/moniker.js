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
        const dd = new Date();
        degree.year = dd.getFullYear();
        degree.oldYear = degree.year - 1;    
        
        degree.list = [`あさがおの成長日記つけてます`,
                       `汗をかいてもさわやかグランプリ${degree.oldYear}王者`,
                       `頭を強く打ってこうなりました`,
                       `兄が完璧すぎて恋愛相手が見つからない`,
                       `あまり関わりたくない`,
                       `イービルアイ`,
                       `意外に少子化問題を憂いでいそうグランプリ${degree.oldYear}王者`,
                       `今でも兄とお風呂に入る`,
                       `大きくなったらぼく謙吾をお嫁さんにもらう！`,
                       `大きなお兄さんキラー`,
                       `大きなお兄さん御用達`,
                       `大きなお兄さん殺人事件`,
                       `おかまバーから駆けつけました`,
                       `男にしか興味のない思春期`,
                       `おまえ何者だ`,
                       `おまえはどこのクラスだ`,
                       `おやつの時間が待ち遠しい`,
                       `オレはだれなんだ？`,
                       `駆け込み乗車しなさそうグランプリ${degree.oldYear}王者`,
                       `可能性を感じさせるノーコン`,
                       `噛ませ犬`,
                       `神なるノーコン`,
                       `缶ジュースの間接キスが許せるグランプリ${degree.oldYear}王者`,
                       `完璧にエロ本を隠してそうグランプリ${degree.oldYear}王者`,
                       `きな粉かけばばあ`,
                       `恐怖髪の毛がわた飴`,
                       `恐怖全身チョコレートコーティング女`,
                       `恐怖鼻血がイチゴ味`,
                       `空気が読めない`,
                       `くちゃくちゃ星人`,
                       `こう見えて靴のサイズ２２センチ`,
                       `ココアパウダーかけばばあ`,
                       `これから負けます`,
                       `さあボコボコにしておくれ`,
                       `最後の一線は踏み越えるな！`,
                       `最初に死ぬキャラ`,
                       `サイボーグ`,
                       `ザ・ケンドー`,
                       `寒いキャラ`,
                       `サングラスが似合わないグランプリ${degree.oldYear}王者`,
                       `視線が怖い`,
                       `竹刀に体を捧げた男`,
                       `ジャンパー連続殺人事件`,
                       `シュガースティックかけばばあ`,
                       `熟女にもてもてグランプリ${degree.oldYear}王者`,
                       `親友だった男に告白されて一瞬にして白髪になった`,
                       `スポーツはテニスをやっていてほしいグランプリ${degree.oldYear}王者`,
                       `スポーツブラは色気がなさすぎではないかと最近考え始めている`,
                       `ぞうきんに生まれ変わりたい`,
                       `卒業したら月の裏に帰る`,
                       `ただのノーコン`,
                       `黙っていれば可愛いのに惜しい`,
                       `小さな悪魔`,
                       `小さなお子様には見せないでください`,
                       `注射がこわい`,
                       `抽選で私の○○をあげます`,
                       `チョコレートパウダーかけばばあ`,
                       `月の裏に実家がある`,
                       `手乗り`,
                       `テントウ虫に生まれ変わりたい`,
                       `どうしてオレはここにいるんだ？`,
                       `当店人気NO.1ホスト`,
                       `読書マン`,
                       `ドコイッタメガネー`,
                       `ＴＯＯ　ＳＨＹ　ＳＨＹ　ＧＩＲＬ！`,
                       `何がしたいんだ`,
                       `なんとなく自然に優しそうグランプリ${degree.oldYear}王者`,
                       `猫好き五段`,
                       `猫より犬が好きそうグランプリ${degree.oldYear}王者`,
                       `ニューハーフ御用達`,
                       `入学するまでは月の裏に住んでいた`,
                       `猫好きなのが周りにばれていないと未だに信じこんでいる`,
                       `化け物`,
                       `発進ガムベース！`,
                       `パラソルマン`,
                       `パンツがブリーフでも許せるグランプリ${degree.oldYear}王者`,
                       `人見知りグランプリ${degree.year}優勝候補`,
                       `100点をとっても誰にも言わなそうグランプリ${degree.oldYear}王者`,
                       `広島カープの赤いユニフォームが似合わないグランプリ${degree.oldYear}王者`,
                       `ファンタが飲みたくてうずうずしてる`,
                       `ベビーフェイスグランプリ${degree.oldYear}王者`,
                       `ボーダーラインぎりぎり`,
                       `マウンド上の精密機械`,
                       `まだ生えていない`,
                       `みんなのサンドバッグ代わり`,
                       `胸毛が生えてたらショックグランプリ${degree.oldYear}王者`,
                       `胸をはだけさせると反則的グランプリ${degree.oldYear}王者`,
                       `もう処置なし`,
                       `もう手遅れ`,
                       `ＵＦＯに連れ去られたことがある`,
                       `妖怪`,
                       `よくわからない精密機械`,
                       `よくわからないノーコン`,
                       `リアルで実家がお菓子の家`,
                       `両親は月の裏でＵＦＯを作っている`,
                       `両親が月の裏の秘密基地で働いている`,
                       `ロリ容疑`];
        
        degree.total = degree.list.length;
        const r = Math.randomInt(degree.total);
        
        $('#text').text(degree.list[r]);
        localStorage.setItem("shogo", degree.list[r]);
    }
});