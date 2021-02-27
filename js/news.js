/* acordion */

  $(".newsContainer").on("click", function(){   
    $(this).children().eq(1).slideToggle(300);  
    $(this).children().eq(0).toggleClass("news-no-bar");
    $(this).siblings().find(".newsHeader").removeClass("news-gold");
    $(this).siblings().find(".newsHeader i").removeClass("rotate-fa");
    $(this).find(".newsHeader").toggleClass("news-gold");
    $(this).find(".fa").toggleClass("rotate-fa");
  
    $(".newsContainer .newsItem").not($(this).children().eq(1)).slideUp(300);
  });





