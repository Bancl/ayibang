/**
 * Created by aoyolo on 16/8/15.
 */
var time7;

$(function () {

    time7 = setInterval(autoCommu,5000);
    $('.imgNav ul li').on('click',commimgNav);
    $('.commu_nav li').mouseenter(mouse);
    $(".commu_hide").click(show_hide);

});




//=============================



function commimgNav() {
    var index = $(this).index();
    imgSwitch(index);
    clearInterval(time7);
    time7 = setInterval(autoCommu,5000);
}
function autoCommu() {
    var index = ($('.comm_img_box.active').index()+1)%6;
    imgSwitch(index);
}
function imgSwitch(index) {
    $('.imgNav ul li a img').removeClass('active').eq(index).addClass('active');
    $('.comm_img_box').removeClass('active').eq(index).addClass('active');
    $('.comm_img_text').removeClass('active').eq(index).addClass('active');
}
function mouse() {
    $('.commu_nav li').removeClass('active');
    $(this).addClass('active');
    $('.commu_msg_ul li').removeClass('active').eq($(this).index()).addClass('active');
}

function show_hide() {
    var isShow = $(this).parents('.commu_drop').find('.commu_drop_body').toggleClass('disable').css('display');
    if(isShow == 'none'){
        this.getElementsByTagName('img')[0].src="../imgs/community/collapsed_yes.gif";
    }else {
        this.getElementsByTagName('img')[0].src="../imgs/community/collapsed_no.gif";
    }
}