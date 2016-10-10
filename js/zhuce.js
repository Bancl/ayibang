/**
 * Created by aoyolo on 16/8/11.
 */
var passwordnum = '';
var maxusername = '';
var emailMenui = 0;
var passlevels=['','低','中','高'];
var emaildomains = ['qq.com', '163.com', 'sina.com', 'sohu.com', 'yahoo.com', 'gmail.com', 'hotmail.com'];

$(function () {

   $('.zhuce td input').on('focus blur keyup ',function (event) {
       switch (event.type){
           case 'focus':
               focusEvent(this);
               break;
           case 'blur':
               blurEvert(this);
               break;
           case 'keyup':
               keydownEvent(event , this);
break;
}
});
updateseccode();
});

function focusEvent(element) {
    $(element).removeClass('er');
    $(element).parent('td').next().children().removeClass('active').siblings('.text1').addClass('active');
    $(element).parent('td').next().removeClass('p_right test');
}
function blurEvert(element) {
    var zx =  $(element).parent('td').next().children().removeClass('active');
    $('#emailmore_menu').css('display','none');
    switch (element.id){
        case 'username':
            if($('#username').val().length < 4){
                zx.siblings('.text2').addClass('active');
                $(element).addClass('er');
            }else {
                zx.end().addClass('test');
                ll(element.value,zx)
            }
            break;
        case 'password':
            if($('#password').val().length < 6){
                zx.siblings('.text2').addClass('active');
                $(element).addClass('er');
            }else {
                zx.end().addClass('p_right');
            }
            break;
        case 'password1':
            if(passwordnum != ''){
                if(passwordnum ===element.value){
                    zx.end().addClass('p_right');
                }else if(element.value !='') {
                    zx.siblings('.text3').addClass('active');
                    $(element).addClass('er');
                }else {
                    zx.siblings('.text2').addClass('active');
                    $(element).addClass('er');
                }
            }else {
                element.value ='';
                zx.siblings('.text2').addClass('active');
                $(element).addClass('er');
                $('#password').focus();
            }
            break;
        case 'email':
            var test = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(element.value =="" || !test.test(element.value)){
                zx.siblings('.text2').addClass('active');
                $(element).addClass('er');
            }else {
                zx.end().addClass('test');
                emailtest(element.value, zx)
            }
            break;
    }
}
function keydownEvent(e,element) {
    switch (element.id){
        case 'username':
            if(element.value.length == 15){
                maxusername = element.value;
            }
            if (element.value.length>15){
                element.value = maxusername;
            }
            break;
        case 'password':
            if(element.value.length > 5){
                passwordnum = element.value;
                pwd(passwordnum,element)
            }else {
                passwordnum = '';
                $(element).parent('td').next().children().removeClass('active')
            }
            break;
        case 'email':
            emailMenu(e,'email');
            break;
    }
}


function emailMenu(e, id) {

    e = e ? e : window.event;
    var obj = $('#'+id);

    if(obj.val().indexOf('@') != -1) {
        $('#emailmore_menu').css('display','none');
        return;
    }
    var value = e.keyCode;
    var v = obj.val();
    if(!obj.val().length) {
        $('#emailmore_menu').css('display','none');
        return;
    }
    if(value == 40) {
        emailMenui++;
        if(emailMenui >= emaildomains.length) {
            emailMenui = 0;
        }
    } else if(value == 38) {
        emailMenui--;
        if(emailMenui < 0) {
            emailMenui = emaildomains.length - 1;
        }
    } else if(value == 13) {
        emailclick($('.emailDrop .a'));
        $('#emailmore_menu').css('display','none');
        return;
    }
    var s = '<ul>';
    for(var i = 0; i < emaildomains.length; i++) {
        s += '<li><a href="javascript:;" onmouseover="emailover(this)"' + (emailMenui == i ? 'class="a" ' : '') + '>' + v + '@' + emaildomains[i] + '</a></li>';
    }
    s += '</ul>';
    $('#emailmore_menu').html(s).css('display','block');
}
function emailclick(th) {
    $('#email').val(th.html());
}
function emailover(th) {
    $('#email').val($(th).html());
    $('.emailDrop a').removeClass('a');
    $(th).addClass('a')
}


function pwd(pwd,element) {
    var passlevel = 0;
    if(pwd.match(/\d+/g)) {
        passlevel ++;
    }
    if(pwd.match(/[a-z]+/ig)) {
        passlevel ++;
    }
    if(pwd.match(/[^a-z0-9]+/ig)) {
        passlevel ++;
    }
    $(element).parent('td').next().children().removeClass('active').siblings('.text3').addClass('active');

    $('span.mima').attr('class','mima').addClass('mima_'+passlevel).next().text('密码强度:'+passlevels[passlevel])
}
function ll(name,zx) {
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="http://vip-redhome.com/forum.php?mod=ajax&inajax=yes&infloat=register&handlekey=register&ajaxmenu=1&action=checkusername&username='+name+'"') + '&format=xml&callback=?'
    $.ajax({
        type: "GET",
        // accepts:'json',
        dataType: "jsonp",
        url: yql,
        success : function(data){
            if(data.results[0].match(/succeed/ig)){
                zx.end().removeClass('p_right test').addClass('p_right');
            }
        }
    });
}
function emailtest(name,zx) {
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="http://vip-redhome.com/forum.php?mod=ajax&inajax=yes&infloat=register&handlekey=register&ajaxmenu=1&action=checkemail&email='+name+'"') + '&format=xml&callback=?'
    $.ajax({
        type: "GET",
        // accepts:'json',
        dataType: "jsonp",
        url: yql,
        success : function(data){
            if(data.results[0].match(/succeed/ig)){
                zx.end().removeClass('p_right test').addClass('p_right');
            }else {
                zx.siblings('.text2').addClass('active');
                $(element).addClass('er');
            }
        }
    });
}
//
// var nums = null;
// // function updateseccode(){
// //     $('.testImg').attr('src','')
// //     var time = setTimeout(function () {
// //         var num = parseInt(Math.random()*20);
// //         if(nums === num){
// //             updateseccode();
// //             return;
// //         }
// //         var str = '../imgs/yanzhengma/misc'+num+'.png';
// //         $('.testImg').attr('src',str).css({
// //             'height':'30px'
// //         });;
// //         nums = num;
// //         clearTimeout(time);
// //     },1000)
// //
// // }
// function zz() {
//     var ss=1;
//     console.log('as')
//         }