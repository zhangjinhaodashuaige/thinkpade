/**
 * Created by Ryan on 8/11/16.
 */

(function ($) {

    var picOptions = [];
    var posOptions = [];
    var indexArr = [];
    var optionCache = {};
    var $divs = [];
    var isStart = false;

    //单步移动
    function stepMove() {
        if(!isStart){
            startGame();
            isStart = true;
        }

        var $div = $(this);
        var index = indexArr[$div.index()];
        var x = Math.floor(index / optionCache.sideCount);
        var y = index % optionCache.sideCount;
        var $emptyDiv = $($div.parent().children(".empty"));
        for (var i = x - 1; i <= x + 1; i++) {
            for (var j = y - 1; j <= y + 1; j++) {
                //处理越界
                if (i < 0 || i >= optionCache.sideCount || j < 0 || j >= optionCache.sideCount) continue;
                //跳过自身
                if (i == x && j == y) continue;
                //跳过对角
                if (
                    ((i == x - 1) && (j == y - 1)) ||
                    ((i == x + 1) && (j == y - 1)) ||
                    ((i == x + 1) && (j == y + 1)) ||
                    ((i == x - 1) && (j == y + 1))
                ) continue;
                var currIndex = i * optionCache.sideCount + j;
                var emptyIndex = indexArr[$emptyDiv.index()];
                if (emptyIndex == currIndex) {
                    if (!($emptyDiv.is(":animated"))) {
                        indexArr[$emptyDiv.index()] = index;
                        indexArr[$div.index()] = emptyIndex;
                        $emptyDiv.animate(posOptions[index], 200);
                        $div.animate(posOptions[emptyIndex], 200, function () {
                            if (completeDetect()) {
                                $emptyDiv.css(picOptions[optionCache.count-1]);
                                isStart = false;
                                // $("#btnStart").prop("disabled", false);
                                alert("Congratulations");
                            }
                        });
                    }
                }
            }
        }

    }

    function optionsCheck(options){
        //如果用户给的参数是空的，就进行默认赋值
        if (!options) {
            options = {
                // container: ".gameBox",
                count: 9,
                img: "images/1.png"
            };
        }

        // if(options.container == undefined){
        //     options.container= ".gameBox"
        // }

        if(options.count == undefined){
            options.count = 9;
        }

        if(options.img == undefined){
            options.img = "images/1.png";
        }

        //如果给的总数不能开平方，那就找到离他最近的那个可以开平方的数
        var width = Math.sqrt(options.count);
        if(width % 1 != 0){
            options.count = Math.pow(Math.round(width),2);
        }

        options.sideCount = Math.sqrt(options.count);

        //将设置参数缓存起来
        optionCache = options;
        return options;
    }


//初始化游戏
    function initGame(options) {

        // optionsCheck(options);
        // console.log(optionCache.count);
        // return;

        var containerWH = 339;
        var divWH = containerWH/options.sideCount-2;

        optionCache.container.css({
            width: "339px",
            height: "339px",
            padding: 0,
            margin: 0,
            padding: 0,
            position: "relative",
        });

        // var $divs = $(".box>div");
        for (var i = 0; i < optionCache.count; i++) {
            var $div = $("<div></div>");
            var picPositionX = -i % optionCache.sideCount * (divWH);
            var picPositionY = -Math.floor(i / optionCache.sideCount) * (divWH);
            var divPositionX = i % optionCache.sideCount * ((divWH) + 1);
            var divPositionY = Math.floor(i / optionCache.sideCount) * ((divWH) + 1);
            picOptions.push({
                backgroundImage: "url(images/1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "333px 333px",
                backgroundPosition: picPositionX + "px " + picPositionY + "px"
            });

            posOptions.push({
                top: divPositionY + "px",
                left: divPositionX + "px"
            });

            $div
                .css(
                    {
                        width: divWH+"px",
                        height: divWH+"px",
                        float: "left",
                        "background-color": "#fff",
                        position: "absolute",
                        cursor: "pointer"
                    }
                )
                .css(picOptions[i])
                .css(posOptions[i])
                .attr("data-puzzle", i)
                .appendTo(optionCache.container)
                .click(stepMove);

            $divs.push($div);
        }
    }

    function startGame() {
        // var $divs = $(optionCache.container).children("div");
        $divs[$divs.length - 1].css("backgroundImage", "").addClass("empty");
        randomUpset();
        $(this).prop("disabled", true);
    }

//随机打乱
    function randomUpset() {
        // var $divs = $(".box>div");
        indexArr = [];
        while (true) {
            var randomIndex = Math.round(Math.random() * (optionCache.count-1));
            if (indexArr.indexOf(randomIndex) != -1) {
                continue;
            } else {
                indexArr.push(randomIndex);
            }
            if (indexArr.length == $divs.length) {
                break;
            }
        }

        for (var i = 0; i < indexArr.length; i++) {
            var index = indexArr[i];
            var $div = $($divs[i]);
            $div.animate(posOptions[index], 200);
        }
    }

//完成检测
    function completeDetect() {
        var result = true;
        for (var i = 1; i < indexArr.length; i++) {
            if (indexArr[i] < indexArr[i - 1]) {
                result = false;
                break;
            }
        }
        return result;
    }

    $.fn.puzzle = function (options) {
        optionsCheck(options);
        optionCache.container = $(this);
        initGame(optionCache);
    }
})(jQuery)

