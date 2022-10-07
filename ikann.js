$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".mana").slideToggle("slow");

	$('nav ul li.tidak-aktif').each(function(index, el) {
		var manaID = el.id.split('-')[1];
		$('.mana#' + manaID).hide();
	});
});

$('nav').delegate('.tidak-aktif', 'click', function(event) {
	var pilihMana = this.id.split('-')[1];
	console.log(pilihMana);
	document.location.hash = pilihMana;

	$('.isi:visible').fadeOut('slow', function() {
		$('.mana#' + pilihMana).fadeIn('slow');
	});

	var $this = $(this);
	$this.removeClass('tidak-aktif').addClass("aktif");
    $this.siblings().addClass('tidak-aktif').removeClass('aktif');

    });
});