// wait until the DOM is fully loaded
$(document).ready(function(){

    // when the user clicks or selects this button class
    // this works since the buttons will be added dynamically to the page
    $(document).on("click", ".devour-button", function(event){

        // prevent the page from refreshing
        event.preventDefault();

        // make an ajax call to update the burger that is being selected
        // $(this).data("id") refers to the currently selected burger's id in the database
        $.ajax("/api/burgers/" + $(this).data("id"), {
            type: "PUT"
        }).then(
            function(){
                // reload the page to get the updated list and stay in this route /
                location.assign("/");
            }
        );
    });

});