/* acordion */

$(".liveContainer").on("click", function(){   
  $(this).children().eq(1).slideToggle(300);  
  $(this).children().eq(0).toggleClass("live-no-bar");
  $(this).siblings().find(".liveHeader").removeClass("live-gold");
  $(this).siblings().find(".liveHeader i").removeClass("rotate-fa");
  $(this).find(".liveHeader").toggleClass("live-gold");
  $(this).find(".fa").toggleClass("rotate-fa");

  $(".liveContainer .liveItem").not($(this).children().eq(1)).slideUp(300);
});
