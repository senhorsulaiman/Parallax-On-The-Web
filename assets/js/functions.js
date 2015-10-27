$( document ).ready(function() {

  	
});



//functions on scroll of window 
$(window).scroll(function() {
	var wScroll=$(this).scrollTop();

		$('.logo').css({ 
			'transform': 'translate(0px,'+wScroll/2+'%)'
		});


		$('.back-bird').css({

			'transform': 'translate(0px,'+wScroll/4+'%)'

		});

		$('.fore-bird').css({

			'transform': 'translate(0px,-'+wScroll/	14+'%)'

		});


		if (wScroll > $('.shopping-box').offset().top-$( window ).height()/1.2)

		{
			//select each figure
			$('.shopping-box figure	').each(function(i){

				//function after time out

				setTimeout(function(){


					$('.shopping-box figure	').eq(i).addClass('is-showing');


				},200*(i+1));

			});
			


		}



	if (wScroll > $('.large-window').offset().top-$( window ).height())

	{
		
		//background-position changing using wscroll

		$('.large-window').css({'background-position':'center '+(wScroll-$('.large-window').offset().top)+'px'})

		

		//opacity changing using wscroll
		var opac=(wScroll-$('.large-window').offset().top+400)/(wScroll/5)

		$('.window-tint').css({'opacity':''+opac+''}) 


	}



	




if ( $(window).width() > 550) {     
  //Add your javascript for large screens here


  if (wScroll > $('.blog').offset().top-$( window ).height())

	{

		//math.min for set minmum value

		var offset=Math.min(0,(wScroll-$('.blog').offset().top)+$( window ).height()-500);
		//math.abs for absolute changing negetive value to posetive

		 $('.post1').css({'transform': 'translate('+offset+'px,'+Math.abs(offset*0.02)+'px)'});
		 $('.post3').css({'transform': 'translate('+Math.abs(offset)+'px,'+Math.abs(offset*0.02)+'px)'});



	}

}
else {
  //Add your javascript for small screens here
}






});

