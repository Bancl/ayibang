/**
 * Created by apple on 16/8/18.
 */
$(document).ready(function(){
    $(".aboutnav ul li").each(function (s) {
        $(this).click(function () {
            console.log(this);
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".articleContent ul li").eq(s).show().siblings().hide();
        })
    });
});
