$(function() {
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
	//菜单栏
	$('ul.lev2').each(function(){
		$(this).prev('li').append($(this))
	})
	//修改dom结构
	$('body').addClass('saveonmany')
	$('.div3').prepend($('.lev1'))
	$('.indexTabBox').append($('#CentralArea'))
	$('.indexTabRight').append($('.v4topleft>table, .v4topright>table'))
	$('.indexTabRight').append($('#LeftPanel'))

	//css slider control
	setInterval(function() {
	  var $curr = $('#slider1 input[type=radio]:checked');  
	  var $next = $curr.next('input');
	  if(!$next.length) $next = $('#slider1 input[type=radio]').first();
	  $next.prop('checked', true);
	  
	}, 3500);
});