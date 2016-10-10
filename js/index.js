/**
 * Created by aoyolo on 16/8/4.
 */
var time1;
var time2;
var time3;
var time4;
var nums=null;
var sec2_play=true;
autoRunbo2();
autoRunbo();
//==========轮播展示图控制=============================//
function select_pag(e) {
    var index=$('.select_pag span.active').index();
    switch (e.target.nodeName){
        case "A":
            if(this.className === 'next_pag'){
                index = (index+1)%5;
            }else if(this.className === 'pre_pag'){
                index = (index-1) < 0 ? 4: index-1;
            }
            break;
        case "SPAN":
            index = $(this).index();
            break;
    }
    chang_pag(index);
}
function chang_pag(index) {
    $('#select_pag ').children().removeClass('active')
        .eq(index).addClass('active');
    $('div.runbo ul li').removeClass('active')
        .eq(index).addClass('active');
}

//------------右侧滚定条控制------------------//
function GOTop() {
    time3 = setInterval(function () {
        var currentPosition = $(window).scrollTop();
        if (currentPosition > 0){
            $(window).scrollTop(currentPosition-10);
        }
        else {
            $(window).scrollTop(0);
            clearInterval(time3);
        }
    },1);
}

//==============主内容轮播控制==================//
function clearTime() {
    clearInterval(time1)
}
function autoRunbo() {
    time1 =setInterval(function () {
        var index=($('.select_pag span.active').index()+1)%5;
        chang_pag(index);
    },2500);
}
function autoRunbo2() {
    time2 =setInterval(function () {
        var index=($('.sec2_runbo_img.active ').index()+1)%3;
        sec2_runbao(index);
    },3000);
}
function sec2_runbao_controll() {
    var index = $(this).index();
    switch (index){
        default:
            sec2_runbao(index);
        case 3:
            if(sec2_play){
                clearInterval(time2);
                sec2_play=false;
                $('.sec2_runbao_controll a').eq(3).removeClass('active').end().eq(2).addClass('active');
            }
            break;
        case 2:
            console.log(time2);
            if(!sec2_play){
                autoRunbo2();
                sec2_play=true;
                $('.sec2_runbao_controll a').eq(2).removeClass('active').end().eq(3).addClass('active');
            }
            break;

    }
}

//获取后台验证码
// function getVerCode() {
//     console.log('dsf')
//     var result = "";
//     $.ajax({
//         url:'/http://www.vip-redhome.com/member.php?mod=register',
//         type:"GET",
//         dataType:"json",
//         async:false,//关闭异步加载,这样只有加载完成才进行下一步
//         success:function (data) {
//             result = data.code;
//             console.log(result)
//         }
//     });
//     return result;
// }
// getVerCode();
function sec2_runbao(index) {
    $('.sec2_runbo_img').removeClass('active').eq(index%2).addClass('active');
    $('.img_box').animate({
        left:-470*index
    },500,function () {
        if(index===2){
            $(this).css('left','0');
        }
    })
}

//--------------------加载完毕执行-------------------//
$(function () {
    $(window).on('scroll resize',function () {
        if ($(window).scrollTop() >= 135)
        {
            $('#navF').addClass('nav_flex');
        }else{
            $('#navF').removeClass('nav_flex')
        }

        if ($(window).scrollTop() >= 150)
        {
            $('.top').css('height','73px');
        }else{
            $('.top').css('height','0')
        }
        if($(window).scrollTop() >= 120){
            $('.section_1').addClass('fadeInUp');
        }

        if($(window).scrollTop() >= 300){
            $('.advertisement').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 400){
            $('.section_2').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 600){
            $('.sec2_left').addClass('bounceInLeft');
        }
        if($(window).scrollTop() >= 600){
            $('.sec2_right').addClass('bounceInRight');
        }
        if($(window).scrollTop() >= 800){
            $('.section_3').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 1200){
            $('.wow_left').addClass('bounceInLeft');
        }
        if($(window).scrollTop() >= 1200){
            $('.wow_up').addClass('bounceInUp');
        }
        if($(window).scrollTop() >= 1200){
            $('.wow_down').addClass('bounceInDown');
        }
        if($(window).scrollTop() >= 1200){
            $('.wow_right').addClass('bounceInRight');
        }
        if($(window).scrollTop() >= 1800){
            $('.sec4_content1').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 1800){
            $('.sec4_img').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 2300){
            $('.deanyshotcdiv1').addClass('bounceInLeft');
        }
        if($(window).scrollTop() >= 2300){
            $('.deanyshotcdiv2').addClass('bounceInRight');
        }
        if($(window).scrollTop() >= 2300){
            $('.deanyshotcdiv3').addClass('bounceInUp');
        }
        if($(window).scrollTop() >= 2300){
            $('.deanyshotcdiv4').addClass('bounceInDown');
        }
        if($(window).scrollTop() >= 3000){
            $('.deanzxlt').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 3000){
            $('.deanltcl').addClass('fadeInLeft');
        }
        if($(window).scrollTop() >= 3000){
            $('.deanltcc').addClass('fadeInDown');
        }
        if($(window).scrollTop() >= 3000){
            // console.log('sdfsf')
            $('.deanltcr').addClass('fadeInRight');
        }
        if($(window).scrollTop() >= 3000){
            $('.deanltcr li').addClass('fadeInUp');
        }
        if($(window).scrollTop() >= 3500){
            $('.deandspl').addClass('bounceInLeft');
        }
        if($(window).scrollTop() >= 3500){
            $('.deandsprt').addClass('bounceInDown');
        }
        if($(window).scrollTop() >= 3500){
            $('.deandsprb').addClass('bounceInUp');
        }
        if($(window).scrollTop() >= 3800){
            $('.wow2').addClass('bounceInUp');
        }
        if($(window).scrollTop() >= 4100){
            $('.deanptel').addClass('bounceInLeft');
        }
        if($(window).scrollTop() >= 4100){
            $('.qq1').addClass('bounceInUp');
        }
        if($(window).scrollTop() >= 4100){
            $('.qq3').addClass('bounceInUp');
        }
        if($(window).scrollTop() >= 4100){
            $('.qq2').addClass('bounceInDown');
        }
        if($(window).scrollTop() >= 4100){
            $('.deanzxdiy').addClass('bounceInRight');
        }
        // display
        if($(window).scrollTop() >= 100){
            $('.subheader').addClass('fadeInRight');
        }
    });
    $('td.td1').on('click',function () {
        $('.header_drop').addClass('active');
    });
    $('.header_drop').on('mouseleave',function () {
        $(this).removeClass('active');
    });
    $('.top').on('click',GOTop);
    $('#select_pag').children().on('click',select_pag);
    $('div.runbo .chang_pag a').on('click',select_pag);
    $('.runbo').on('mouseenter',clearTime).on('mouseleave',autoRunbo);
    $('.sec2_runbao_controll a').on('click',sec2_runbao_controll);
    $('.select1').on('click',function () {
        $('.alltopic').addClass('active');
    });
    $('.alltopic,.selectbox').on('mouseleave',function () {
        $('.alltopic').removeClass('active');
    });
    $('.select2').on('click',function () {
        $('.lastpublish').addClass('active');
    });
    $('.lastpublish,.selectbox').on('mouseleave',function () {
        $('.lastpublish').removeClass('active');
    });
    $('.select3').on('click',function () {
        $('.moreover').addClass('active');
    });
    $('.moreover,.selectbox').on('mouseleave',function () {
        $('.moreover').removeClass('active');
    });
    $('.tankuan').on('mousedown','table.denru-login .move',function (event) {
        var curret_x=event.clientX;
        var curret_y= event.clientY;
        var Objack = $('.moveObject');
        var objack_y=parseInt(Objack.css('top'));
        var objack_x= parseInt(Objack.css('left'));
        document.onmousemove =function (e) {
            Objack.css('top',objack_y+e.clientY-curret_y);
            Objack.css('left',objack_x+e.clientX-curret_x);
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup=null;
        }

    })
});

//===========================登入界面加载===================//
function user_login() {
    if($('.moveObject')[0] != undefined)return;
    var str = $('<div class="moveObject"><table class="denru-login"> <tr> <td class="tr1_td1 move"></td>' +
        '<td class="tr1_td2 move"></td> <td class="tr1_td3 move"></td> </tr> <tr> <td class="tr2_td1 move"></td> ' +
        '<td class="tr2_td2 "> <h3 class="flb"> <em><img src="imgs/loading.gif"> 请稍候...</em> <span><a href="javascript:;" onclick="closeDrop()">关闭</a></span> </h3> </td>' +
        ' <td class="tr2_td3 move"></td> </tr> <tr> <td class="tr3_td1 move"></td> <td class="tr3_td2 move"></td> ' +
        '<td class="tr3_td3 move"></td> </tr> </table> </div>');
    str.appendTo('.tankuan');
    var browserWidht = document.body.offsetWidth;
    var objectWidht = $('.moveObject');
    objectWidht.css('left',(browserWidht-objectWidht.width())/2);

    time4 = setTimeout(function () {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: 'drop.xml',
            success :function (data) {
                if($('.moveObject')[0] != undefined){
                    $('.tr2_td2').html(data.getElementsByTagName('root')[0].innerHTML);
                    var objectWidht = $('.moveObject');
                    updateseccode();
                    objectWidht.css('left',(browserWidht-objectWidht.width())/2);
                }
            },
           error:function (e) {
                console.log(e);
            }
        })
    },2000)
}
function closeDrop(){
    var eml=$('.moveObject');
    if(eml[0] != undefined){
        eml.remove();
        clearTimeout(time4);
    }
}

function updateseccode(){
    $('.testImg').attr('src','');
    var time = setTimeout(function () {
        var num = parseInt(Math.random()*20);
        if(nums === num){
            updateseccode();
            return;
        }
        var str = 'imgs/yanzhengma/misc'+num+'.png';
        $('.testImg').attr('src',str).css({
            'height':'30px'
        });
        nums = num;
        clearTimeout(time);
    },1000)

}