$(document).ready(main);

var contador = 1;

function main () {
	$('.bt-menu').click(function(e){
		e.preventDefault();

		// if (contador == 1) {
			$('nav').animate({
				marginLeft: '0'
			},800);

			$('.cerrar').animate({
				right: '0px',
			},400);

      $('.bt-menu').animate({
				right: '-100%',
			},400);
    });


    $('.cerrar').click(function(e){
    		e.preventDefault();
        $('nav').animate({
          marginLeft: '-100%'
        },800);

        $('.cerrar').animate({
          right: '-100%',
        },400);

        $('.bt-menu').animate({
          right: '50px',
        },400);
      });

			// $('#open').animate({
			// 	marginLeft: '-800px',
			// },400);

			contador = 0;
		// }

    //  else {
		// 	contador = 1;



			// $('#open').animate({
			// 	marginLeft: '0px',
			// },400);
		// }

}