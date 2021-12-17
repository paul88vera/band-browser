$(window).on("load", function() {
    $("#myModal").modal('show');
});

$("#myBtn").click(function(event) {
    $("#myModal").modal("hide");

    event.preventDefault();
});