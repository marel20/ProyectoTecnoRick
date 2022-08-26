    /*------Start Slider-------*/
    const nav = document.querySelector('nav')
    window.addEventListener('scroll', fixNav)

    function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
    }
    /*-------End Slider--------*/

    /*------Start Btn Wsp----------*/
    $(document).ready(function(){

        $('#whatsapp').on('mouseover', fnCambiaBtn);
        $('#wsp').on('mouseout', fnCambiaBtn2);

        function fnCambiaBtn(){
            //console.log('entre a la funcion')
        $('#whatsapp').removeClass('visible').addClass('oculto');
        $('#wsp').removeClass('oculto').addClass('visible');
        }

        function fnCambiaBtn2(){
            //console.log('entreeeee')
        $('#wsp').removeClass('visible').addClass('oculto');
        $('#whatsapp').removeClass('oculto').addClass('visible');
        }
    })
    /*----------End Btn Wsp---------*/
    
    /*---------- Start Picture Galery --------*/
   $(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });

  /*-------- End Picture Galery ----------*/

  /*-------- Start List Budgets ---------*/
  $(document).ready(function(){

    $('#add').on('click', fnSumar);

    function fnSumar() {
       // console.log('entramos en sumar')
        objeto = $('#descripcion').val();
        cantidad = $('#cantidad').val();

        $('#col1').append(objeto + "<br>");
        $('#col2').append(cantidad + "<br>");
        
    }
})

  /*-------- Start List Budgets ---------*/

  /*-------- Start Button Budgets -------*/ 
  
  $(document).ready(function(){

    $('#option2').on('click', fnBudgets);
    $('#option1').on('click', fnMessage);

    function fnBudgets(){
        //console.log('entre a la funcion')
    $('#message').removeClass('visible').addClass('oculto');
    $('#budgets').removeClass('oculto').addClass('visible');
    }

    function fnMessage(){
        //console.log('entreeeee')
    $('#budgets').removeClass('visible').addClass('oculto');
    $('#message').removeClass('oculto').addClass('visible');
    }

})

  /*-------- End Button Budgets -------*/ 

  
  