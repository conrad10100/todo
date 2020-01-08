// Crosses out task
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on trashcan to delete task
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){//slowly fades li as removing
		$(this).remove();
	});
	event.stopPropagation();
});
//can add new task by hitting enter after typing, must have text in input
$("input[type='text']").keypress(function(event){
  if($(this).val()!=("")){ //checks if not empty input
    if(event.which === 13){ //if enter is hit
  		var todoText = $(this).val();
  		$(this).val("");//replaces input with empty string
  		//create a new li and add to ul
  		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
  	}
  }
});
//can add new task by hitting the plus button after typing, must have text in input
$(".fa-plus-square").click(function(){
	if($("input").val()!=("")){//checks if not empty input
    var todoText = $("input").val();
    $("input").val(""); //replaces input with empty string
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>")
  }
});
