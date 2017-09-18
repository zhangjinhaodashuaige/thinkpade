var swiper
var isandroid
var picNum = 0,
    shareName = 'NING ZE TAO',
    shareNum = 0000001
// var shareUrl='index.html-from=share.htm'/*tpa=http://go.163.com/2016/0727/yili/index.html?from=share*/
// var shareT=['跑不到里约但比昨天跑得远一点','盼别人夺冠 不如自己流汗','为别人欢呼不如听自己心跳','电视机再见 约朋友 场上见','对着屏幕呐喊不如自己上场带感','再精彩的赛事也不如晨跑这件小事']
var hh

$(function () {
    hh = $('#main').css('height');
    // $('.height').remove();
    // $('#main').css('height',hh) //设置main高度
    var ua = navigator.userAgent;
    isandroid = /android/i.test(ua);
    //music('http://go.163.com/2016/0727/yili/js/bg.mp3'); //设置背景音乐
    //sshare(pop('.shareImg'));//弹出分享图层
    // $('#boxvr').attr('height',hh);
    var from = getQuery('share');
    if (from == 'ning') {
        page1Init();
    } else {
        var cl = clientChecks();

        if (cl == 'neteasenewsapp') {
            page1Init();
        } else {
            $('.vv').attr('src', 'http://flv2.bn.netease.com/videolib3/1608/04/hBGHY4212/HD/hBGHY4212-mobile.mp4');
            $('.vv').attr('poster', '2-2.jpg' /*tpa=http://go.163.com/2016/0727/yili/js/images/2.jpg*/ );
            vplay();

        }

    }

    eResize('.video-box');
    eResize('.vcont');
    $(window).bind("resize", function () {
        eResize('.video-box');
        eResize('.vcont');
    });

})

//js
function eResize(e) {
    var cw = 640,
        ch = document.documentElement.clientHeight,
        vScale, vwScale, vhScale;
    vwScale = cw / 640, vhScale = ch / 1030;
    vScale = vwScale > vhScale ? vwScale : vhScale;
    $(e).css({
        '-webkit-transform': 'scale(' + vScale + ')',
        '-webkit-transform-origin': 'center top'
    });
}

function startInit() {
    $('.b360').fadeOut(500);
    $('.downBtn').fadeIn(500);
}

function boxPlay(src, pic) {
    var ppic = pic || null;
    var wx = clientChecks();
    $('.boxCont').show();
    $('#boxvr').attr('src', src);
    $('#boxvr').attr('poster', ppic);
    $('#boxvr')[0].play();
    $('.back').on('tap', function () {
        $('.boxCont').fadeOut(500);
        // $('#boxv').fadeOut(500);
        $('#boxvr').attr('src', '');
    })
    $('#boxvr').on('ended', function () {
        $('#boxvr').fadeOut(500);
        $('#boxvr').attr('src', '');
    })
}

function page1Init() {
    $('.page1').show();
    $('.vv').attr('src', 'http://flv2.bn.netease.com/videolib3/1608/05/OuTtN8272/HD/OuTtN8272-mobile.mp4');
    $('.vv').attr('poster', '1-2.jpg' /*tpa=http://go.163.com/2016/0727/yili/js/images/1.jpg*/ );

    preloadimages(yili, boxinit);
    $('.downBtn').on('tap', function () {
        ad('startBtn')
        delTouch();
        $('.page1').fadeOut(1000, function () {
            $('.page1').remove()
        });
        vplay();
    })
}

function page3Init() {
    ad('page3');
    getNum();
    $('.page3').css('height', window.innerHeight);
    $('.page4Cont').css('height', window.innerHeight);
    $('.page3Cont').show();
    var page3swp = new Swiper('.page3', {
        autoplay: 5000,
    });
    //alert(window.innerHeight)
    $(".zs").on('tap', function () {
        // pop($('.page3pop'));
        ad('fillNameBtn');
        $('.page3pop').fadeIn('1000');
    })
    $('.names').on('focus', function () {
        $('.ts').fadeOut(500);
    })
    $('.page3sub').on('tap', function () {
        var zm = /^[A-Za-z\s]+$/;
        console.log("names:" + zm.test($('.names').val()))
        if ($('.names').val() != '' && zm.test($('.names').val())) {
            setName();
        } else {
            $('.names').val('');
            alert('请填写姓名拼音');
        }

    })
    //事实人数
    $('.bf').on('click', function () {
        ad('page3VideoBtn')
        boxPlay('http://flv2.bn.netease.com/videolib3/1608/05/rIgvm5691/HD/rIgvm5691-mobile.mp4', 'VBSP4MUH1.jpg' /*tpa=http://vimg1.ws.126.net/image/snapshot/2016/8/H/1/VBSP4MUH1.jpg*/ )
    })
}

function vplay() {
    // eResize('.vcont');
    $('.page2').show();
    $('.vcont').show();
    $('.vcont').on('click', function () {
        $('.vv')[0].play();
    })
    $('.vv').on('ended', function () {
        $('.page2').hide();
        page3Init();
        $('.p3top').fadeOut(1000);
    })
}

function eResize(e) {
    var cw = document.documentElement.clientWidth,
        ch = document.documentElement.clientHeight,
        vScale, vwScale, vhScale;
    vwScale = cw / 640, vhScale = ch / 1030;
    console.log(cw + '   ' + vhScale)
    vScale = vwScale > vhScale ? vwScale : vhScale;
    $(e).css({
        '-webkit-transform': 'scale(' + vScale + ')',
        '-webkit-transform-origin': 'center top'
    });
}

function getNum() {
    $.ajax({
        // url:'common.php-act=getData.htm'/*tpa=http://go.163.com/2016/0727/yili/common.php?act=getData*/,
        url: 'http://go.163.com/2016/0727/yili/js/common.php?act=getData',
        dataType: 'json',
        success: function (e) {
            // console.log(e.retData)
            if (e.retData != '') {
                setRNum(e.retData, '.rNum', 'images/num/');
                // $('.NumPeo').html(e.retData);
            }
        }
    })
}

function setName() {
    $.ajax({
        url: 'http://go.163.com/2016/0727/yili/js/common.php?act=create',
        // url:'common-1.php-act=create.htm'/*tpa=http://go.163.com/2016/0727/yili/common.php?act=create*/,
        type: 'POST',
        dataType: 'json',
        data: {
            name: $('.names').val(),
        },
        success: function (e) {
            // console.log(e)
            if (e.retCode == 1) {
                ad('page4')
                $('.page4Cont').show();
                $('.page3Cont').hide();
                // alert($('.page4').css('height'))
                $('.endName').html($('.names').val().toUpperCase());
                // console.log($('.names').val().toUpperCase())
                shareNum = e.retData;
                shareName = encodeURI($('.endName').text());

                // console.log(shareUrl);
                var page4swp = new Swiper('.page4bg', {
                    height: hh,
                });
                var page4 = new Swiper('.page4', {
                    prevButton: '.left',
                    nextButton: '.right',
                    height: hh,
                    onInit: function (swiper) {
                        shareTxt()
                    },
                    onSlideChangeEnd: function (swiper) {
                        shareTxt()
                    }

                });
                page4swp.params.control = page4;
                page4.params.control = page4swp;
                setRNum(e.retData, '.endNum', 'images/page4/num/');

                function shareTxt() {
                    picNum = page4swp.activeIndex;
                    shareData.link = 'http://go.163.com/2016/0727/yili/share.html?allNum=' + shareNum + '&name=' + shareName + '&pic=' + picNum
                    shareData.desc = shareData.fTitle = shareData.fText = "奥运虽已结束，但我的奥运永不落幕！我是" + parseInt(shareNum) + "号，邀你一起活力开动！"
                    NeteaseShareUpdate();
                }
            } else {
                alert(e.retInfo)
            }
        }
    })
}

function setRNum(num, cls, img) {
    if (num != '') {
        var all = num.length - 1;
        for (var i = 0; i <= all; i++) {
            var n = all - i;
            var sl = $(cls).children().eq(n).children();
            sl.attr('src', img + num[n] + '.png')
        }
    }
}

//获取地址栏参数
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}