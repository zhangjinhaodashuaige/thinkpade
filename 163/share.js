/**
 * Created by djkong on 2015/2/12.
 */
function share_survey(share){
    var loc = window.location;
    var na = window.navigator.userAgent;
    if(loc.host.search(/163\.com/)<0)return false;
    var code = 'init';
    var shareName = "";
    var keywords = "";
    var ua = window.navigator.userAgent;
    if(ua.search(/NewsApp/)>=0){
        code = 'newopen';
        keywords = "newsapp";
        shareName = "新闻客户端分享";
    }else if(ua.search(/MicroMessenger/)>=0){
        code = 'weixinopen';
        keywords = "weixin";
        shareName = "微信分享";
    }else if(ua.search(/YiXin/)>=0){
        code = 'yixinopen';
        keywords = "yixin";
        shareName = "易信分享";
    }else if(ua.search(/weibo/)>=0){
        code = 'weiboopen';
        keywords = "weibo";
        shareName = "微博分享";
    }
    if(na.search(/iPhone|iPad|Touch|Android|Windows Phone/i)<0){
        code = 'pc';
        shareName = "其他";
        keywords = "qita";
    }
    if(share){
        code +='_share';
        neteaseTracker(false,'http://minisite.click.163.com'+location.pathname.replace(/\/(go|auto)|[\w-]+\.[\w]+/g,"")+keywords,shareName,'minisiteclick');
    }
    code = encodeURIComponent(code);
    var url = encodeURIComponent(loc.href);
    var updata_ele = new Image();
    updata_ele.onload = function(){
        console.log("share checked");
    }
    updata_ele.src = "http://go.163.com/common/shareh5.php?act=share&t="+code+'&url='+url;
    // var updata_ele = document.createElement('iframe');
    // updata_ele.style.display='none';
    // updata_ele.src = "http://go.163.com/common/shareh5.php?act=share&t="+code+'&url='+url;
    // document.body.appendChild(updata_ele);
    // updata_ele.onload = function(){
    //     updata_ele.parentNode.removeChild(updata_ele);
    // };
}