var selected = "";
$(".buttons-product__item").click(function () {
		$(".buttons-product").children().removeClass("current");
		$(this).addClass("current");
		selected = $(this).val();
		$(".portfolio__product").children().not("."+selected).hide();
    	$("."+selected).show();
    });