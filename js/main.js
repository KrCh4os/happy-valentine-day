    /**
     * Author laulimxiao
     */

    var offsetX = $("#loveHeart").width() / 2;
    var offsetY = $("#loveHeart").height() / 2 - 55;

    var together = new Date();
    together.setFullYear(2023, 4, 12);
    together.setHours(0);
    together.setMinutes(0);
    together.setSeconds(0);
    together.setMilliseconds(0);

    $('#startDate').text('*' + formatDate(together) + ','); // 相识时间
    $('#untilDate').text('*' + formatDate(new Date()) + '.'); // 今日


    if (!document.createElement('canvas').getContext) {
        var msg = document.createElement("div");
        msg.id = "errorMsg";
        document.body.appendChild(msg);
        $("#code").css("display", "none")
        $("#copyright").css("position", "absolute");
        $("#copyright").css("bottom", "10px");
        document.execCommand("stop");
    } else {
        setTimeout(function() {
            startHeartAnimation();
        }, 110000);

        timeElapse(together);
        setInterval(function() {
            timeElapse(together);
        }, 500);

        adjustCodePosition();
        $("#code").typewriter();

        photoAnimation();
    }

