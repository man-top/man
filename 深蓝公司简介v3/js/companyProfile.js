$(function(){
	//移动端点击菜单显示
	var nav_n=0;
	$("#header_1_nav").click(function(){
		if(nav_n==0){
			$(this).find("p").hide();
			$(this).css("background","url(img/main_6.png)").fadeIn();
			nav_n=1;
		}else{
			$(this).css("background","none");
			$(this).find("p").show();
			nav_n=0;
		}
		$("#header_1_nav_box").fadeToggle();
	})
	
	//返回顶部
	$(window).scroll(function(){
		if($(document).scrollTop()>=200){
			$(".back_top").fadeIn();
		}else{
			$(".back_top").fadeOut();
		}
	})
	$(".back_top").click(function(){
		$(this).animate({"top":"-20vh"},500,function(){
			$(".back_top").hide();
			$(".back_top").animate({"top":"85vh"},100);
		})
		$("html,body").animate({"scrollTop":"0px"},500);
	})
})
