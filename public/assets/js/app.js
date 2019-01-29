// wait until the DOM is fully loaded
$(document).ready(function(){

    $("#devour-button").on("click", function(event){
        event.preventDefault();


        $.ajax("/api/burgers/" + $(this).data("id"), {
            type: "PUT"
        }).then(
            function(){
                console.log("updated burger")
                location.assign("/");
            }
        )
    });

});