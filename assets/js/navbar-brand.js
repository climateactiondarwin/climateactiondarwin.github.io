
$(".collapse").on("hidden.bs.collapse", function() {
    $(".navbar-brand").removeClass("cad-nav-menu-open");
});

$(".collapse").on("show.bs.collapse", function() {
    $(".navbar-brand").addClass("cad-nav-menu-open");
});

