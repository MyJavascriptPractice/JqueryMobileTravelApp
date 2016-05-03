$("[href='#food-page']").click(function(event) {
    siteName = $(this).attr('id');
    $("#typeSite").text(siteName);
    $("#typeSite2").text(siteName);
    $("#typeSite3").text(siteName);
    $("#typeSite4").text(siteName);
    $("#typeSite5").text(siteName);
    splitWord = siteName.split(" ");
    if (splitWord.length >= 2) {
    	$("#firstName").text(splitWord[0]);
    	$("#secName").text(splitWord[1]);
    }else if ((siteName.split("").length) > 7) {
    	$("#firstName").text(siteName);
    	$("#secName").text('');
    }else{
    	$("#secName").text('');
   		$("#firstName").text(siteName);
   		
   	}
});

