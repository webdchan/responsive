
$(document).ready(function(){

  // 탑메뉴 호버 효과
	$(".gnbmenu li a").hover(function(){
		$(this).css({"color": "#0d5f86"});
		$(this).find("span").stop(true, true).slideDown(200);
	}, function () {
		$(this).css("color", "#777");
		$(this).find("span").stop(true, true).slideUp(200);
	});

	//모바일 메뉴(햄버거)
	$(".mo_view").css({"right": "-70%"}); 
	$(".close").hide();

	$(".mo_menu_btn").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "0%"});
		$(".close").show();

	});

	$(".close").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-70%"});
		$(".close").hide();
	});


	//데스크탑-종이학롤링_________ 
	old = 0;
	num = 0;

	function paper() {
		num++;
		if (num > 2) {
			num = 0;
		}

		$(".section3_2 ul li").eq(old).stop(true, true).fadeOut(1000);
		$(".section3_2 ul li").eq(num).stop(true, true).fadeIn(1000, function () {
			old = num;
		});

	}
	setInterval(paper, 3000);


});