(function($){
	$(document).ready(function() {
		$('.list-blocks tr').click(function(){
			var token = $(this).children('td').last().html();
			$('#edit-body-value').val($('#edit-body-value').val() + token);
		});
	});
})(jQuery);