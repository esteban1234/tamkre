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
<<<<<<< HEAD
=======

			$('.menu').animate({
				zIndex:101
			},400);



>>>>>>> ee25fe35598faeb497d445c336d684559b158496
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
<<<<<<< HEAD
          right: '50px',
        },400);
      });

=======
          right: '3%'
					// zIndex:120
        },400);

				$('.menu').animate({
					zIndex:0
				},400);
      });


			// $('nav ul a').click(function(e){
	    // 		e.preventDefault();
	    //     $('nav').animate({
	    //       marginLeft: '-100%'
	    //     },800);
			//
	    //     $('.cerrar').animate({
	    //       right: '-100%',
	    //     },400);
			//
	    //     $('.bt-menu').animate({
	    //       right: '3%'
			// 			// zIndex:120
	    //     },400);
			//
			// 		$('.menu').animate({
			// 			zIndex:0
			// 		},400);
	    //   });



>>>>>>> ee25fe35598faeb497d445c336d684559b158496
			// $('#open').animate({
			// 	marginLeft: '-800px',
			// },400);

<<<<<<< HEAD
			contador = 0;
=======
			// contador = 0;
>>>>>>> ee25fe35598faeb497d445c336d684559b158496
		// }

    //  else {
		// 	contador = 1;



			// $('#open').animate({
			// 	marginLeft: '0px',
			// },400);
		// }

}
