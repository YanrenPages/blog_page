<link rel="stylesheet" type="text&#x2F;css" href="https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css">var OriginTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "╭(°A°`)╮ 页面崩溃啦 ~";
        clearTimeout(titleTime);
    } else {
        document.title = "(｡･ω･｡) 噫又好了~" + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
