  
    //.....jquery code.....//



       //BANNER SLIDER//


		 $(document).ready(function(){
            $("#bennarSlide").owlCarousel({
                loop:true,
                margin: 15,
                items: 1,
                autoplay: true,
                autoplayTimeout:5000,
                dots:false
            });

            $('.next-slide').click(function() {
                $("#bennarSlide").trigger('next.owl.carousel');
            });
          
            $('.prev-slide').click(function() {
                $("#bennarSlide").trigger('prev.owl.carousel');
            });

            });

    

          //Sticky nav bar//


          window.onscroll = function() {myFunction()};

          var header = document.getElementById("nav");
          var sticky = header.offsetTop;

          function myFunction() {
             if (window.pageYOffset > sticky) {
               header.classList.add("stick");
             } else {
               header.classList.remove("stick");
             }
          }

  
          //Post property free//

           
              $(document).ready(function(){

                  $("#hdr-two").click(function(){
                    $("#pst").addClass('pst-add');
                    $("#pst1").addClass('pst1-add');

                  });

                  $("#remov").click(function(){
                    $("#pst").removeClass('pst-add');
                    $("#pst1").removeClass('pst1-add');

                  });
              });




          $(document).ready(function(){

              $("#angle1").click(function(){

                $(".city1").toggleClass('dropout');
              });
              
              $("#angle2").click(function(){

                $(".Area1").toggleClass('dropout');
              });

              $("#angle3").click(function(){

                $(".Category1").toggleClass('dropout');
              });

              $("#angle4").click(function(){

                $(".ActionCategory1").toggleClass('dropout');
              });


          });

             
               $(document).ready(function(){

                $('#city1 li').click(function () {

                    var text = $(this).text();

                    document.getElementById("City").placeholder=text;

                     $(".city1").toggleClass('dropout');
                });


                $('#Area1 li').click(function () {

                    var text = $(this).text();

                    document.getElementById("Area").placeholder=text;

                     $(".Area1").toggleClass('dropout');
                });


                $('#Category1 li').click(function () {

                    var text = $(this).text();

                    document.getElementById("Category").placeholder=text;

                     $(".Category1").toggleClass('dropout');
                });


                $('#ActionCategory1 li').click(function () {

                    var text = $(this).text();

                    document.getElementById("ActionCategory").placeholder=text;

                     $(".ActionCategory1").toggleClass('dropout');
                });


            });

            //Dropdown menu FUNCTION//



            $(document).ready(function(){

              $("#angledwn").click(function(){

                $(".drpdwn").toggleClass('dropout');
                 $("#angledwn").hide('drupout');
                 $("#angel").show('dropout');
              });

              $("#angel").click(function(){

                $(".drpdwn").toggleClass('dropout');
                $("#angel").hide('dropout');
                $("#angledwn").show('drupout');
              });

            });



            //Dropdown menu placeholder FUNCTION//



               $(document).ready(function(){
                $('#drup li').click(function () {

                    var text = $(this).text();

                    document.getElementById("property").placeholder=text;

                     $(".drpdwn").toggleClass('dropout');
                     $("#angel").hide('dropout');
                     $("#angledwn").show('drupout');
                });

            });

        //Hamburger Menu Function//


        $(document).ready(function(){
        $('#nv-panel1').click(function(){
        $(this).toggleClass('open1');
        $("#nv2").slideToggle(500);
        $("#anmate").animate({marginRight: "+=100px"},200);
        $("#anmate").animate({marginRight: "-=100px"},200);
        $("#anmate1").animate({marginRight: "-=100px"},100);
        $("#anmate1").animate({marginRight: "+=100px"},100);
        $(".hamicn1 a").animate({marginRight: "+=50px"},310);
        $(".hamicn1 a").animate({marginRight: "-=50px"},100);

        });
      });
       
        $(document).ready(function(){
           $('.nv1 ul li a').click(function(){
             $("#nv2").hide();
             $('#nv-panel1').toggleClass('open1');

           });

        });

               
        //TESTIMONIALS SLIDER//


        $(document).ready(function(){
             $("#testiSlide").owlCarousel({
                loop:true,
                margin: 15,
                items: 1,
                autoplay: true,
                autoplayTimeout: 7000,
            });
        });




         //.....javascript code.....//


         $(document).ready(function () {
       

         $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
          ) {
      
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
          if (target.length) {
              
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top}, 1000, function() {
             
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  return false;
                } else {
                  $target.attr('tabindex','-1'); 
                  $target.focus(); 
                };

              });
            }
          }

        });
    });

        