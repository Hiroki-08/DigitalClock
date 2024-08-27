const days = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]

function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
}

function showClock() {
    var nowTime = new Date();                           // 現在時刻の取得

    var nowYear = nowTime.getFullYear();                // 年を取得
    var nowMonth= set2fig( nowTime.getMonth() + 1 );   // 月を取得(※1)
    var nowDay  = set2fig( nowTime.getDate() );          // 日を取得
    var nowDays = days[nowTime.getDay()];               // 曜日を取得
    var msgDate = nowYear + "/" + nowMonth + "/" + nowDay + " " + nowDays; // 表示文作成

    var nowHour = set2fig( nowTime.getHours() );        // 時を取得
    var nowMin  = set2fig( nowTime.getMinutes() );      // 分を取得
    var nowSec  = set2fig( nowTime.getSeconds() );      // 秒を取得
    var msgTime = nowHour + ":" + nowMin + ":" + nowSec ;   // 表示文作成

    document.getElementById("RealtimeDateArea").innerHTML = msgDate;   // 表示更新
    document.getElementById("RealtimeClockArea").innerHTML = msgTime;   // 表示更新
}

setInterval('showClock()',10);
