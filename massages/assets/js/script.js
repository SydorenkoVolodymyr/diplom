// /**
// * Http class 
// * Simple Http class this class handle  
// * http request    
// */

// function Http(url) {
//    this._url = url;
// }

// Http.prototype.post = function(data,callback) {
//    $.post(this._url ,data , callback);
// };
// Http.prototype.get = function(data,callback) {
//    $.get(this._url+'?'+data , callback);
// };

/*
  Validator class 
  @desc Common form Validation methods

*/
function Validator() {}
/*
  simple_validation
  @desc  check to see if field is empty 
  @args  obj 
*/
Validator.prototype.simple_validation = function(o) {
    if (o.val == '') {
        this.show_popup(o.err_1);
        return false;
    } else {
        return true;
    }
};

/*
 * email_validation 
 * @args  obj 
 * @desc make regx email validation
*/
Validator.prototype.email_validation = function(o) {
  if (o.val == "") {
        this.show_popup(o.err_1);
        return false;
  } else {
        if (o.expression.test(o.val) == false) {
            this.show_popup(o.err_2);
            return false;
        } else {
            return true;
        }

  }

};

/*
  regx_valid 
  @args obj 
  @desc make a regx validation 
*/
Validator.prototype.regx_validation = function( obj ) {
    if ( obj.val == '' ) {
        this.show_popup(obj.err_1);
        return false;
    } else {
        if (obj.expression.test(obj.val)) {
            return true;
        } else {
            this.show_popup(obj.err_2);
            return false;
        }
    }
}
Validator.prototype.show_popup = function(msg) {
    alert(msg);
    this.hideLoder();
};
Validator.prototype.hideLoder = function(){
    $('.ajax-loder').fadeOut();
}
Validator.prototype.showLoder = function(){
    $('.ajax-loder').fadeIn();
}
$(document).ready(function(){

    if($('body').hasClass('page-thanks')){
        $('html, body').animate({
            scrollTop: $('#nk-part-form').offset().top
        }, 'slow');
    }
    if($('body').width() < 1000 ){
            $('header button').on('click', function(){
            $('nav').fadeIn();
        });
        $(document).on('click', '.nk-wrapper-close button, nav a', function(){
            $('nav').fadeOut();
        });
    }
    

    /* Slider */
    $('.nk-slider').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
      });
    /* End Slider */
    
    /* Scroll to an element*/
     $('a[href^="#"]').click(function() {
        event.preventDefault();
        var id  = $(this).attr("href"),
            header_height = $('header').height();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id).offset().top -header_height
        }, 1000);
    });
    /* End scroll to an element*/

   $(document).scroll(function() {


        var st = $(document).scrollTop();

        if( $(window).width() > 1000){
            var firstAnimSt = st + 300,
                secAnimSt = st + 300;
        } else {
            var firstAnimSt = st + 300,
                secAnimSt = st + 300;
        }

        if( firstAnimSt >= $('#nk-part-2').offset().top && st <= $('#nk-part-2').offset().top + $('#nk-part-2').height()) {
                setTimeout(function(){ $('.nk-about-1').addClass('animated slideInLeft'); }, 200);
                setTimeout(function(){ $('.nk-about-2').addClass('animated slideInLeft'); }, 400);
                setTimeout(function(){ $('.nk-about-3').addClass('animated slideInLeft'); }, 600);
        }
        if( firstAnimSt >= $('#nk-part-3').offset().top && st <= $('#nk-part-3').offset().top + $('#nk-part-3').height()) {
                setTimeout(function(){ $('.nk-letters-1').addClass('animated slideIn'); }, 100);
                setTimeout(function(){ $('.nk-letters-2').addClass('animated slideIn'); }, 200);
                setTimeout(function(){ $('.nk-letters-3').addClass('animated slideIn'); }, 300);
                setTimeout(function(){ $('.nk-letters-4').addClass('animated slideIn'); }, 400);
                setTimeout(function(){ $('.nk-letters-5').addClass('animated slideIn'); }, 500);
                setTimeout(function(){ $('.nk-letters-6').addClass('animated slideIn'); }, 600);
                setTimeout(function(){ $('.nk-letters-7').addClass('animated slideIn'); }, 700);
        }
        if( firstAnimSt >= $('#nk-part-4').offset().top && st <= $('#nk-part-4').offset().top + $('#nk-part-4').height()) {
                setTimeout(function(){ $('.nk-treat-1').addClass('animated zoomIn'); }, 100);
                setTimeout(function(){ $('.nk-treat-2').addClass('animated zoomIn'); }, 200);
                setTimeout(function(){ $('.nk-treat-3').addClass('animated zoomIn'); }, 300);
                setTimeout(function(){ $('.nk-treat-4').addClass('animated zoomIn'); }, 400);
                setTimeout(function(){ $('.nk-treat-5').addClass('animated zoomIn'); }, 500);
        }
    });

    /**---------------------------------------- form ----------------------------------**/
    // /**
    // * make new instane of  Validator Class
    // * @see assets/js/Validator.class.js
    // */
    // var v = new Validator();
    // $('.form').on( 'submit' , function( event ){
    //     event.preventDefault();
    //     var $this = $(this),
    //         $fullname   = $this.find('.fullname'),
    //         $user_phone  = $this.find('.phone'),
    //         $user_email  = $this.find('.email');
    //         $user_age  = $this.find('.age');
    //         $user_message  = $this.find('.nk-message');
    //         var user_name_valid     = v.simple_validation( {
    //              val :$fullname.val() ,
    //              err_1:'Full name required'
    //         } );

    //         var user_phone_valid = v.regx_validation( {
    //              val : $user_phone.val(),
    //              err_1: "Required field phone",
    //              err_2: "Wrong phone",
    //              expression: /^[0-9]{9,11}$/
    //         } );

    //         var user_email_valid = v.regx_validation( {
    //              val  : $user_email.val(),
    //              err_1 : "Required field email",
    //              err_2: "Invalid email",
    //              expression: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                    
    //         } );

            

    //         console.log($fullname.val());
    //         if ( user_name_valid == true  && user_phone_valid == true && user_email_valid == true ) {
             
    //         var $send  = $(".send")
    //         $send.attr("disabled", "true");
    //         $send.attr("style", "opacity:0.4");
    //         // var  http = new Http("api.php");

    //         window.setTimeout(function(){
    //                         alert('Thank You!');
    //                         window.location.replace('thanks.html');
    //         },1000);
    //     }
        
       

    // });

    /**---------------------------------------- end form ----------------------------------**/
});