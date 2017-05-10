$(function() {
	// 顶上的小三角效果
	$('.main-right .jiuxian').mouseenter(function() {
		$(this).find('.myjiu').css({
			'transform': 'rotate(180deg)',
			'margin-left': '-1px',
			'margin-top': '10px'
		});
		$(this).find('.jiuxiantop').css({
			'background': '#fff'
		});
		$(this).find('.mydropdown').show();
	});

	//酒仙下滑小三角
	$('.main-right .jiuxian').mouseleave(function() {
		$(this).find('.myjiu').css({
			'transform': 'rotate(0deg)',
			'margin-left': '5px',
			'margin-top': '2px'
		});
		// $(this).find('.jiuxiantop').css({'background':'#fff'});
		$(this).find('.jiuxiantop').css({
			'background': '#F2F2F2'
		});
		$(this).find('.mydropdown').hide();
	});


	// 左侧导航
	$('.div3 .left-menu').mouseenter(function() {
		$(this).css({
			// 'background': '#eee'
		});
		// $('.div3 li').not($(this)).css({'background':'#b61d1d'});

		$(this).find('.right').show();
		$('.right').not($(this).find('.right')).hide();
	});
	$('.div3 .left-menu').mouseleave(function() {
		$(this).find('.right').hide();
		$(this).css({
			// 'background': '#fff'
		})

	});

	// 幻灯片
	(function() {
		$(".main .paging").show();
		$(".main .paging a:first").addClass("active");

		var num = $('.main .paging a:first').attr('rel'); //右边导航幻灯片
		var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var imgs = arr.slice((num - 1) * 3, num * 3);

		for (var i = 0; i < imgs.length; i++) {
			$('.' + imgs[i]).show();
		}

		var imageWidth = $(".main .window").width();
		var imageSum = $(".main .image_reel img").size();
		var imageReelWidth = imageWidth * imageSum;


		$(".main .image_reel").css({
			'width': imageReelWidth
		});
		// 第二部 动画开始

		var rotate = function() {
			var triggerID = $active.attr("rel") - 1;
			var image_reelPosition = triggerID * imageWidth;


			$(".main .paging a").removeClass('active');
			$active.addClass('active');


			$(".main .image_reel").animate({
				left: -image_reelPosition
			}, 500);

			var act = $('.main .paging a.active').attr('rel');

			var imgs = arr.slice((act - 1) * 3, act * 3);

			for (var i = 0; i < imgs.length; i++) {
				$('.' + imgs[i]).show();

			}

		};

		var rotateSwitch = function() {
			play = setInterval(function() {
				$('.main .img').hide(); //所有人都隐藏
				$active = $('.main .paging a.active').next();
				if ($active.length === 0) {
					$active = $('.main .paging a:first');
				}
				rotate();
			}, 2000);
		};
		rotateSwitch();

		// // 第三部移动和点击
		$(".main .image_reel a").hover(function() {
			clearInterval(play);

		}, function() {
			rotateSwitch();
		});


		$(".main .paging a").click(function() {
			$active = $(this);
			$('.img').hide(); //隐藏其他图片
			var act = $(this).attr('rel');

			var imgs = arr.slice((act - 1) * 3, act * 3);

			for (var i = 0; i < imgs.length; i++) {
				$('.' + imgs[i]).show();
			}

			clearInterval(play);
			rotate();
			rotateSwitch();
			return false;

		});
	})();


	//标签页
	$('.indexTabBoxBottom .indexTabCon').first().show();

	$('.indexTabBoxTop ul li').mouseenter(function() {
		$(this).addClass('active'); /*鼠标移到哪个LI(标签)就添加个Active*/
		$('.indexTabBoxTop ul li').not($(this)).removeClass('active'); /*其余的人移除*/
		idx = $(this).index('.indexTabBoxTop ul li'); /*当前划住的li(标签页)在当前LI(标签页)排第几 */
		$('.indexTabBoxBottom .indexTabCon').eq(idx).show(); /*然后他们里面第几个让他们显示*/
		$('.indexTabBoxBottom .indexTabCon').not($('.indexTabBoxBottom .indexTabCon').eq(idx)).hide(); /*其余的让他们隐藏*/
	});

	$('.indexTabRight .indexTabNewCon').first().show();

	$('.indexTabRight .indexTabNewNav ul li').mouseenter(function() {
		$(this).addClass('active');
		$('.indexTabRight .indexTabNewNav ul li').not($(this)).removeClass('active');
		idx = $(this).index('.indexTabRight .indexTabNewNav ul li'); /*当前划住的li(标签页)在当前LI(标签页)排第几 */
		$('.indexTabRight .indexTabNewCon').eq(idx).show(); /*然后他们里面第几个让他们显示*/
		$('.indexTabRight .indexTabNewCon').not($('.indexTabRight .indexTabNewCon').eq(idx)).hide(); /*其余的让他们隐藏*/
	});
	//修改dom结构
	$('body').addClass('saveonmany')
	$('.div3').prepend($('.lev1'))
	//$('.indexTabBox').append($('.pview.rs-pview table.gallery'))


});