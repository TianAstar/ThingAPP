/**
 * 由稻壳互联 admin 创建于 2015/6/24.
 * http://www.dookay.com
 */
$(document).ready(function() {
 $('.j_main-select>li>a').on('click',function(){
     $(this).parent().addClass('active').siblings().removeClass('active').children('.sub-select-w').hide();
     $(this).siblings().slideToggle(100);
     $('.j_sub-c li a').on('click',function(){
         $(this).parent().addClass('active').siblings().removeClass('active');
     });
     $('.j_close').on('click',function(){
         $(this).parent().parent().slideUp(100);
     })
 })
});