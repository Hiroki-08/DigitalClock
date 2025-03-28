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

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideMenu = document.getElementById('side-menu');
    const menuIcon = document.getElementById('menu-icon');

    // ハンバーガーメニューのクリックイベント
    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sideMenu.classList.remove('hidden');
        sideMenu.classList.toggle('active');
        
        // アイコンの切り替え
        if (sideMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            }
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            sideMenu.classList.remove('active');
            // アイコンをハンバーガーに戻す
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            setTimeout(() => {
                sideMenu.classList.add('hidden');
            }, 300);
        }
    });

    // テーマ変更の処理
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            // 背景色の変更
            document.body.style.backgroundColor = `var(--${theme}-bg)`;
            // 時計エリアのフォント色を変更
            const clockArea = document.getElementById('ClockArea');
            clockArea.style.color = `var(--${theme}-text)`;
            // テーマ変更ボタンの色を変更
            const hamburgerBtn = document.getElementById('hamburger-btn');
            hamburgerBtn.style.color = `var(--${theme}-text)`;
        });
    });
});