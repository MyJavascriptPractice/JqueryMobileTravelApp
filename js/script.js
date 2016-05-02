$("[href='#myMap']").click(function(event) {
    var name = $(this).attr('id');
   $("#clickedName").text(name);
});