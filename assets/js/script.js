$(window).on("load", function() {
    $("#myModal").modal('show');
});

$("#myModal .btn-primary").click(function() {
    $("#myModal").modal("hide");
});