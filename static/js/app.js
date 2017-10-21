

    $(function() {
    	$('body').css('display', 'none');
		$('body').fadeIn(800);
	    $('#dinamic_text').typeIt({
		     strings: ["tu conocimiento", "tus habilidades","tus metas"],
		     speed: 50,
		     breakLines: false,
		     autoStart: false,
		     loop: true
		});
    });

    function joinUs(){
    	window.location.href = "file:///C:/Users/Perey/Desktop/Apalax TI/templates/joinUs.html";
    }
