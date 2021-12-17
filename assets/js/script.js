$(window).on("load", function() {
    $("#myModal").modal('show');
});

$("#myModal .btn-primary").click(function(event) {
    $("#myModal").modal("hide");

    event.preventDefault();
});