$(document).ready(function(){
    // 내용 더보기 버튼 기능
   // 1. 더보기 버튼 저장
   let visual_bt = $('.visual-bt');
   // 2. 보여줄 내용 Section
   // part 영역이 있고 없고 처리 된다.
   let part = $('.part');    
   if(!part.offset()) {
       return;
   }
   let part_pos = $('.part').offset().top;

   // 3. 더보기 버튼 클릭시 .part 로 스크롤한다.
   visual_bt.click(function(){
       $('html').animate({
           scrollTop: part_pos
       });
   });
});