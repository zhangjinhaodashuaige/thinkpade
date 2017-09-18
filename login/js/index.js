$(function () {
    // --------------------------登录页面----------------------------------------------
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
    $('#myTab1 a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })
    // 点击忘记密码隐藏显示盒子
    $(".fanhuidenglu").click(function () {
        $(".wangjimima").hide(1000);
        $("#myTab li a").show(1000);
        $('#wangji').show(1000);
        $(".login").animate({
            "opacity": "1"
        }, 1000);
        $(".wangjimima").animate({
            "opacity": "0"
        }, 1000);
    });
    $("#wangji").click(function () {
        $(".wangjimima").show(1000);
        $("#myTab li a").hide(1000);
        $('#wangji').hide(1000);
        $(".login").animate({
            "opacity": "0"
        }, 1000);
        $(".wangjimima").animate({
            "opacity": "1"
        }, 1000);
    });
    //缓动动画
    $("#demo1").click(function () {
        $("#s-box").animate({
            height: "240px"
        });
        $("#profile").animate({
            "opacity": "0.8"
        }, 1000);
        $("#home").animate({
            "opacity": "0"
        }, 1000);
        $('.login').css({
            'border-bottom': 'none'
        })
    });
    $("#demo2").click(function () {
        $("#s-box").animate({
            height: "0px"
        });
        $("#profile").animate({
            "opacity": "0"
        }, 1000);
        $("#home").animate({
            "opacity": "0.8"
        }, 1000);
        $('.login').css({
            'border-bottom': '1px solid rgba(255,255,255,0.3)'
        })
        //   正则表达式开始
        var h = /^[\u4e00-\u9fa5]{0,}$/;
        var d = /^1[3|4|5|8][0-9]\d{4,8}$/;
        var y = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        $("input").focus(function () {
            $(this).prev().css("color", "#008DE8");
        });
        // 登录页面正则开始
        $("[name='loginemail']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='loginemail']").next().html("邮箱不能为空！");
                $(this).prev().css("color", "#999");
            } else if (!v.match(y)) {
                $("[name='loginemail']").next().html("请填写正确的邮箱！");
                $("[name='loginemail']").prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='loginemail']").next().html("");
            }
        });
        $("[name='loginmima']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='loginmima']").next().html("密码不能为空！");
                $(this).prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='loginmima']").next().html("");
            }
        });
        // 注册页面正则开始
        $("[name='regsiteremail']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='regsiteremail']").next().html("邮箱不能为空！");
                $(this).prev().css("color", "#999");
            } else if (!v.match(y)) {
                $("[name='regsiteremail']").next().html("请填写正确的邮箱！");
                $("[name='regsiteremail']").prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='regsiteremail']").next().html("");
            }
        });
        $("[name='regsitermima']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='regsitermima']").next().html("密码不能为空！");
                $(this).prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='regsitermima']").next().html("");
            }
        });
        $("[name='regsitername']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='regsitername']").next().html("姓名不能为空！");
                $(this).prev().css("color", "#f00");
            } else if (!v.match(h)) {
                $("[name='regsitername']").next().html("姓名不合法！");
                $("[name='regsitername']").prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='regsitername']").next().html("");
            }
        });
        $("[name='regsiterqiye']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='regsiterqiye']").next().html("地址不能为空！");
                $(this).prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='regsiterqiye']").next().html("");
            }
        });
        $("[name='regsiterphone']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='regsiterphone']").next().html("手机号不能为空！");
                $(this).prev().css("color", "#f00");
            } else if (!v.match(d)) {
                $("[name='regsiterphone']").next().html("手机号不正确！");
                $("[name='regsiterphone']").prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='regsiterphone']").next().html("");
            }
        });
        // 忘记密码页面
        $("[name='forgetemail']").blur(function () {
            var v = $(this).val();
            if (v == '') {
                $("[name='forgetemail']").next().html("邮箱不能为空！");
                $(this).prev().css("color", "#999");
            } else if (!v.match(y)) {
                $("[name='forgetemail']").next().html("请填写正确的邮箱！");
                $("[name='forgetemail']").prev().css("color", "#f00");
            } else {
                $(this).prev().css("color", "#0EA74A");
                $("[name='forgetemail']").next().html("");
            }
        });
        // -------登录页面
        $('#back button').click(function () {
            var loginmima = $("[name='loginmima']").val();
            var loginemail = $("[name='loginemail']").val();
            if (qiye == "") {
                $("[name='loginmima']").next().html("地址不能为空！");
                return;
            }
            if (loginemail != '' && !loginemail.match(y)) {
                $("[name='loginemail']").next().html("请填写正确的邮箱！");
                $("[name='loginemail']").prev().css("color", "#f00");
                return;
            }
        })
        // ---注册页面
        $('#form button').click(function () {
            var regsiteremail = $("[name='regsiteremail']").val();
            var regsitermima = $("[name='regsitermima']").val();
            var regsitername = $("[name='regsitername']").val();
            var regsiterqiye = $("[name='regsiterqiye']").val();
            var regsiterphone = $("[name='regsiterphone']").val();
            if (name == "") {
                $("[name='regsitername']").next().html("姓名不能为空！");
                return;
            } else if (!regsitername.match(h)) {
                $("[name='regsitername']").next().html("姓名不合法！");
                $("[name='regsitername']").prev().css("color", "#f00");
                return;
            }
            if (regsiterphone == '') {
                $("[name='regsiterphone']").next().html("手机号码不能为空！");
                return;
            } else if (!regsiterphone.match(d)) {
                $("[name='regsiterphone']").next().html("请填写正确的手机号！");
                $("[name='regsiterphone']").prev().css("color", "#f00");
                return;
            }
            if (regsitermima == "") {
                $("[name='regsitermima']").next().html("地址不能为空！");
                return;
            }
            if (regsiterqiye == "") {
                $("[name='regsiterqiye']").next().html("地址不能为空！");
                return;
            }
            if (regsiteremail != '' && !regsiteremail.match(y)) {
                $("[name='regsiteremail']").next().html("请填写正确的邮箱！");
                $("[name='regsiteremail']").prev().css("color", "#f00");
                return;
            }
        });
        // -------------忘记密码
        $('.wangjimima button').click(function () {
            var email = $("[name='forgetemail']").val();
            if (forgetemail != '' && !forgetemail.match(y)) {
                $("[name='forgetemail']").next().html("请填写正确的邮箱！");
                $("[name='forgetemail']").prev().css("color", "#f00");
                return;
            }
            // 提交成功后
            $('input').val("");
            $(".button").css('background', '#0EA74A');
            $(".button").css('color', '#fff');
            $(".button").css('border', 'none');
            $(".button").attr("disabled", true);
            $(".button").val("预约成功！请等待我们的回电");
            $('input').prev().css("color", "#999");
        });
    });
});