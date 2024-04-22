$(".btn>li").click(function(){
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
    let i=$(this).attr('data-filter')
    $(".gallery").isotope({ filter: i })
})

setTimeout(function(){$(".gallery").isotope('layout')},100)

const grid=new Isotope(".gallery",{

    itemSelector:'.box'

})

$(".fancybox").fancybox();

$(".topbtn").click(function(){
    $("html").animate({scrollTop:0},1000)
})

$(".topbtn").hide();
$(window).scroll(function(){
    let scr=$("html").scrollTop();

    if (scr>300){
        $(".topbtn").fadeIn()
    }else{
        $(".topbtn").fadeOut()
    }
})