// jsを記述する際はここに記載していく

console.log("初めてのJS");
console.log(23+5);
console.log(2000-1800);
console.log("18+5");
var name = "田邊";
var name2 = "弘之";
console.log(name, name2);

var point = Math.floor( Math.random() *100);;
console.log("点数は", point);
if (point >= 80){
    console.log("素晴らしい！");
}else{
    console.log("もっと頑張ろう！");
}

$(".button").on("click", function () {
    // alert("押されたよ");
    // この下は消さない
    var luck = Math.floor( Math.random() *10);
    console.log("点数は", luck);
    if (luck > 8){
        console.log("大吉！");
        $(".kekka").html("大吉！");
    }else if (luck > 2){
        console.log("吉！");
        $(".kekka").html("吉");
    }else {
        console.log("凶");
        $(".kekka").html("凶、、");
    }
    });

// $(".button1").on("click", function () {
//     $(".user_result").html("あなたが選んだのは「グー」ですね！");
//     });

// $(".button2").on("click", function () {
//     $(".user_result").html("あなたが選んだのは「チョキ」ですね！");
//     });

// $(".button3").on("click", function () {
//     $(".user_result").html("あなたが選んだのは「パー」ですね！");
//     });

$(".cpu").on("click", function () {
    // 
    var cpu = Math.floor( Math.random() *3);
    if (cpu == 0){
        console.log("CPUはグー");
        $(".cpu_result").html("コンピュータは「グー」を選びました。");
    }else if (cpu == 1){
        console.log("CPUはチョキ");
        $(".cpu_result").html("コンピュータは「チョキ」を選びました。");
    }else if (cpu == 2){
        console.log("CPUはパー");
        $(".cpu_result").html("コンピュータは「パー」を選びました。");
    }
    });
    var $countA = 0;
    var $countB = 0;
    var $countC = 0;
    // var $seriesA = 0;
    // var $seriesB = 0;
    // var $seriesC = 0;
    function myGame() {
        // 自分が選択したじゃんけんの手
        var myte = document.getElementById("janken").selectedIndex;
        // CPUのじゃんけんの手の番号
        var cpunum = Math.floor(Math.random()*3);
        // CPUのじゃんけんの手
        var cpuhand;
        // 判定
        
        var judge;

        if(cpunum == 0) {
            cpuhand = "ぐー";
        } else if(cpunum == 1) {
            cpuhand = "ちょき";
        } else if(cpunum == 2) {
            cpuhand = "ぱー";
        }
        
        if(myte == 0 && cpunum == 1) {
            judge = "あなたの勝ち";
            document.getElementById( "victory" ).innerHTML = ++$countA;
            document.getElementById( "victory2" ).innerHTML = ++$seriesA;
            document.getElementById( "lost2" ).innerHTML = 0;
            $seriesB = 0;
            target = document.getElementById("animation");
            if (target.className == null || target.className=="" || target.className=="active") {
                target.className = "active";
            } else {
                target.className = "";
            }
            
        } else if(myte == 1 && cpunum == 2) {
            judge = "あなたの勝ち";
            document.getElementById( "victory" ).innerHTML = ++$countA;
            // document.getElementById( "victory2" ).innerHTML = ++$seriesA;
            // document.getElementById( "lost2" ).innerHTML = 0;
            // $seriesB = 0;
            target = document.getElementById("animation");
            if (target.className == null || target.className=="" || target.className=="active") {
                target.className = "active";
            } else {
                target.className = "";
            }
        } else if(myte == 2 && cpunum == 0) {
            judge = "あなたの勝ち";
            document.getElementById( "victory" ).innerHTML = ++$countA;
            // document.getElementById( "victory2" ).innerHTML = ++$seriesA;
            // document.getElementById( "lost2" ).innerHTML = 0;
            // $seriesB = 0;
            target = document.getElementById("animation");
            if (target.className == null || target.className=="" || target.className=="active") {
                target.className = "active";
            } else {
                target.className = "";
            }
        } else if(myte == cpunum) {
            judge = "ひきわけ";
            document.getElementById( "tie" ).innerHTML = ++$countB;
            // document.getElementById( "victory2" ).innerHTML = 0;
            // document.getElementById( "lost2" ).innerHTML = 0;
            // $seriesA = 0;
            // $seriesB = 0;
            if (target.className == "active") {
                target.className = "";
            }
        } else {
            judge = "あなたの負け";
            document.getElementById( "lost" ).innerHTML = ++$countC;
            // document.getElementById( "lost2" ).innerHTML = ++$series;
            // document.getElementById( "victory2" ).innerHTML = 0;
            // $seriesA = 0;
            if (target.className == "active") {
                target.className = "";
            }
        }   
    

        document.getElementById("message1").innerHTML = "<h3>CPUの手: " + cpuhand + "</h3>";
        document.getElementById("message2").innerHTML = "<h3>結果: " + judge + "</h3>";
    }

    // var $countA = 0;
    // function countUpA() {
    //     if(myte == 0 && cpunum == 1) {
    //         document.getElementById( "victory" ).innerHTML = ++$countA;
    //     } else if(myte == 1 && cpunum == 2) {
    //         document.getElementById( "victory" ).innerHTML = ++$countA;
    //     } else if(myte == 2 && cpunum == 0) {
    //         document.getElementById( "victory" ).innerHTML = ++$countA;
    //     } else if(myte == cpunum) {
    //         document.getElementById( "tie" ).innerHTML = ++$countA;
    //     } else {
    //         document.getElementById( "lost" ).innerHTML = ++$countA;
    //     }
    // }