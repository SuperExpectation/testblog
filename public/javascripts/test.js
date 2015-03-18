
 $(document).ready(function(){
  //是否选择进行判断
  $(".submit_btn").click(function(){
   if ($("input:checkbox:checked").length == 0)
   {
    alert('please select an item');
   }else{
    alert($("input:checkbox:checked").length + " is(are) selected");
   }
  });
  //进行反选
   $(".Select_All_btn").click(function(){
   $("input[type=checkbox]").each(function(){
    if ($(this).attr("checked"))
    {
     $(this).attr("checked",false);
    }else{
     $(this).attr("checked",true);
    }
   });
   });
   });
  