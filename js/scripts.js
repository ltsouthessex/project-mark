    $(document).ready(function(){
		var background = 0;
		$('#version').html("Version 0.13")
        $('.lvl1').on('click', function(){
			var offset = $(this).offset().top;
			var offset = offset+50;
			var height = $('html').height();
			var height =  height/2;
			if (offset < height) {
				$(this).parent().children(".tab").addClass("bot");      
				$(this).parent().children(".tab").children(".lvl2").addClass("top");
				var arrow = $(this).parent().children('.tab').children('.lvl2').children('h2');
				arrow.appendTo(arrow.parent());
				arrow.html("▲");
			} else {     
				$(this).parent().children(".tab").children(".lvl2").addClass("bot");
			}
			var Overview = $(this).attr('data-tab');
			var Overview = "."+Overview;
			var object = $(this);
			if ($(this).hasClass("active")) {
				$(".active").removeClass("active");
			} else {	
				$(".tab").removeClass("active");
				$(".lvl1.clickable").removeClass("active");
				$(Overview).addClass("active");
				$(this).addClass("active");	
				$(this).parent().children(".tab").addClass("active");       
				$(this).parent().addClass("active");
				$(this).parent().children(".tab").focus();
			}
		});
		var q = function() { $(".menu .active").removeClass("active"); }; 		
		$('.lvl1, .tab, .lvl2, #cover, #content, #closecontent').clickoutside(q);
		
		$('.lvl2 a').on('click', function(){
			var frame = "/project-mark/"+$(this).attr('data-frame');
			
			$('#content').load(frame, function( response, status, xhr ) {
				if ( status == "error" ) {
					var msg = "Sorry something went wrong ";
					$( "#content" ).html( msg + xhr.status + " " + xhr.statusText );
				}
			});
			
			$('#frame').addClass("active");
			$("#cover").addClass("active");
		});
		$('#closecontent,#cover').on('click', function(){
			$('#content').html("Loading")
			$('#frame').removeClass("active");
			$("#cover").removeClass("active");
		});
		/*Debugging Scripts*/
		$('#background-sw').on('click', function(){
			if($('body').css("background-image") == "none") {
				$('body').css("background-image", "url('img/background-01.png')");
				$('header').css("color", "#fff");
				$('#animation-sw').addClass("active");
				/*$("#animation-sw").animate({padding: "+20px"},{queue:true, duration:500, easing: 'swing'});
				$("#animation-sw").animate({padding: "-20px"},{queue:true, duration:200, easing: 'swing'});*/
			} else {
				$('body').css("background-image", "none");
				$('header').css("color", "#000");
				$('#animation-sw').removeClass("active");
				$('body').css("animation-name", "none");
			}
		});				
		$('#animation-sw').on('click', function(){
			if($('body').css("animation-name") == "none") {
				$('body').css("animation-name", "background1");
			} else {
				$('body').css("animation-name", "none");
			}
		});
		$('#mapexpand-sw').on('click', function(){			
			$("#earth").toggleClass("map");
			$(".button").toggleClass("map");
			$(".menu").toggleClass("map");
		});
    });
	
	
