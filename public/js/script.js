jQuery(document).ready(function($) {
  var $win = $(window);
  var $account_circle = $('.fcc-logo + .material-icons');
  var $fcc_account_lists= $('.fcc-panel .fcc-account-menu > li');
  var k = $fcc_account_lists.length;
  var $wrapper = $('.wrapper');
  var $goto_top = $('.goto-top');  



  $account_circle.click(function() {

    setTimeout(function() {
      $fcc_account_lists.toggleClass('on');
      $wrapper.toggleClass('h-expand');
    }, 100);  
  

      setTimeout(function() {
        $fcc_account_lists.toggleClass('h-expand'); 
      },200);
  }); /*when click the account-icon effect*/

  $win.scroll(function() {
    if($(this).scrollTop() > 570 ) {
      $goto_top.addClass('active');
    } else {
      $goto_top.removeClass('active');
    }
  }); /* when window scroll down over 570px, the $goto_top icon when show up*/
  
  $goto_top.click(function() {
    
    $(window).scrollTop(0);

  });  /*to go top click event*/
  
//  $fcc_account_lists.each(function(idx,elm) {
//    $(this)[idx].classList.toggle('active');
//  });
});


//
//(function() {
//  //var win = $(window);
//  var account_circle = document.querySelector('.fcc-logo + .material-icons');
//  var fcc_account_lists= document.querySelectorAll('.fcc-panel .fcc-account-menu > li');
//  var k = fcc_account_lists.length;
//  var wrapper = document.querySelector('.wrapper');
//  var goto_top = document.querySelector('.goto-top');  
//  
////  console.log(account_circle,wrapper);
//  
//  [].forEach.call(fcc_account_lists, function(elm, idx) {
//    account_circle.addEventListener('click', function() {
//    setTimeout(function() {
//        elm.classList.toggle('on');
//        wrapper.classList.toggle('h-expand');
//      }, 100);
//    console.log(elm);  
////    setTimeout(function() {
////        elm.toggleClass('h-expand'); 
////    },200);  
//
//    }, false);
//  });
//  
//
//})();















//var main = function() {
//  $('.btn').click(function() {
//    var post = $('.status-box').val();
//    var titlepost = $('.title-box').val();
//    $('<li>').html("<div><ul>"+titlepost+"</ul><ul>"+post+"</ul></div>").prependTo('.posttitle');
//     //$('<li>').text(post).prependTo('.posts');
//    $('.status-box').val('');
//    $('.counter').text('500');
//    $('.btn').addClass('disabled'); 
//  });
//  
//  $('.status-box').keyup(function() {
//    var postLength = $(this).val().length;
//    var charactersLeft = 500 - postLength;
//    $('.counter').text(charactersLeft);
//  
//    if(charactersLeft < 0) {
//      $('.btn').addClass('disabled'); 
//    }
//    else if(charactersLeft == 500) {
//      $('.btn').addClass('disabled');
//    }
//    else {
//      $('.btn').removeClass('disabled');
//    }
//  });
//  
//  $('.btn').addClass('disabled');
//}
//
//$(document).ready(main);
//
//function showMenu(id){
//  $('#arrow'+id).toggle();
//}