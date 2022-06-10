$(document).ready(function(){

	$('.burger').on('click', function () {
		$(this).toggleClass('active');
		$('.nav_block').slideToggle();
	});

	$(".checkselect").click(function() {
		$(this).toggleClass('open');
  	});
	$(document).on('click', function(e) {
			if (!$(e.target).closest(".checkselect").length) {
			$('.checkselect').removeClass('open');
			}
		e.stopPropagation();
	});

	
	$(".datepicker_row").click(function() {
		$('.datepicker_windows').toggle();
	  });
	  $(document).on('click', function(e) {
		if (!$(e.target).closest(".datepicker_row").length) {
		  $('.datepicker_windows').hide();
		}
		e.stopPropagation();
	  });

    $("#datepicker").datepicker({dateFormat: 'dd MM yy', inline:true, altField: "#alternate",});

    $("#datepicker2").datepicker({dateFormat: 'dd MM yy', inline:true, altField: "#alternate2",});

	$('.select').styler({ selectSearch: true });

	$(".open_popup").magnificPopup({removalDelay:300,type:"inline"});

});

(function($) {
	function setChecked(target) {
		var checked = $(target).find("input[type='checkbox']:checked").length;
		if (checked) {
			$(target).find('select option:first').html('Выбрано: ' + checked);
		} else {
			$(target).find('select option:first').html('По вакансии');
		}
	}
	$.fn.checkselect = function() {
		this.wrapInner('<div class="checkselect-popup"></div>');
		this.prepend(
			'<div class="checkselect-control">' +
				'<select class="form-control"><option></option></select>' +
				'<div class="checkselect-over"></div>' +
			'</div>'
		);	
		this.each(function(){
			setChecked(this);
		});		
		this.find('input[type="checkbox"]').click(function(){
			setChecked($(this).parents('.checkselect1'));
		});
		this.parent().find('.checkselect-control').on('click', function(){
			$popup = $(this).next();
			$('.checkselect-popup').not($popup).css('display', 'none');
			if ($popup.is(':hidden')) {
				$popup.css('display', 'block');
				$(this).find('select').focus();
			} else {
				$popup.css('display', 'none');
			}
		});
		$('html, body').on('click', function(e){
			if ($(e.target).closest('.checkselect1').length == 0){
				$('.checkselect-popup').css('display', 'none');
			}
		});
	};
})(jQuery);	
$('.checkselect1').checkselect();





(function($) {
	function setChecked2(target) {
		var checked2 = $(target).find("input[type='checkbox']:checked").length;
		if (checked2) {
			$(target).find('select option:first').html('Выбрано: ' + checked2);
		} else {
			$(target).find('select option:first').html('По возрасту');
		}
	}
	$.fn.checkselect2 = function() {
		this.wrapInner('<div class="checkselect-popup"></div>');
		this.prepend(
			'<div class="checkselect-control">' +
				'<select class="form-control"><option></option></select>' +
				'<div class="checkselect-over"></div>' +
			'</div>'
		);	
		this.each(function(){
			setChecked2(this);
		});		
		this.find('input[type="checkbox"]').click(function(){
			setChecked2($(this).parents('.checkselect2'));
		});
		this.parent().find('.checkselect-control').on('click', function(){
			$popup = $(this).next();
			$('.checkselect-popup').not($popup).css('display', 'none');
			if ($popup.is(':hidden')) {
				$popup.css('display', 'block');
				$(this).find('select').focus();
			} else {
				$popup.css('display', 'none');
			}
		});
		$('html, body').on('click', function(e){
			if ($(e.target).closest('.checkselect2').length == 0){
				$('.checkselect-popup').css('display', 'none');
			}
		});
	};
})(jQuery);	
$('.checkselect2').checkselect2();



