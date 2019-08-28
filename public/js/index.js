$(function() {
	//修改dom结构
	$('body').addClass('saveonmany')
	$('.div3').prepend($('.lev1'))
	$('.indexTabBox').append($('#CentralArea'))
	$('.indexTabRight').append($('.v4topleft>table, .v4topright>table'))
	$('.indexTabRight').append($('#LeftPanel'))

	//菜单栏
	$('ul.lev2, ul.lev3').each(function(){
		$(this).prev('li').append($(this))
	})
	$(".lev1").mouseleave(function(){
      $(this).find('li').removeClass('hover')

    })
	// $(".lev1").menuAim({
	// 	activate: activateSubmenu,
	// 	deactivate: deactivateSubmenu,
	// 	rowSelector:">li"
	// });
	// function activateSubmenu(row) {
 //      var idx = $(row).index();
 //      $('.lev1').each(function(){
 //        $(this).children('li').eq(idx).addClass('hover')

 //      })
 //    }

 //    function deactivateSubmenu(row) {
 //      var idx = $(row).index();
 //      $('.lev1').each(function(){
 //        $(this).children('li').removeClass('hover')

 //      })
 //    }

  var $menu = $('.ppt .div3 ul');
	$menu.menuAim({
		activate: activateSubmenu,
		deactivate: deactivateSubmenu
	});

	function activateSubmenu(row) {
		var $row = $(row),
	      $submenu = $row.children('ul');

		$row.addClass('hover');
	}

	function deactivateSubmenu(row) {
		var $row = $(row),
			$submenu = $row.children('ul');

		$row.removeClass('hover');
	}
	//css slider control
	// setInterval(function() {
	//   var $curr = $('#slider1 input[type=radio]:checked');
	//   var $next = $curr.next('input');
	//   if(!$next.length) $next = $('#slider1 input[type=radio]').first();
	//   $next.prop('checked', true);

	// }, 3500);
	$(".carousel-control-prev").click(function(){
	  $("#carouselExampleIndicators").carousel("prev");
	});
	$(".carousel-control-next").click(function(){
	  $("#carouselExampleIndicators").carousel("next");
	});
});