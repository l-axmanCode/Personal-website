
// =====================================
// DOCUMENT READY FUNCTION
// =====================================

$(document).ready(function () {

    // Display welcome message in console
    console.log("Welcome to Laxman's Personal Website!");

    // Fade-in animation for main content
    $("main").hide().fadeIn(1000);

    // Smooth hover effect for buttons
    $(".btn").hover(
        function () {
            $(this).css("transform", "translateY(-3px)");
        },
        function () {
            $(this).css("transform", "translateY(0)");
        }
    );

    // Navigation click event
    $("nav a").on("click", function () {
        console.log("Page selected: " + $(this).text());
    });

});

// =====================================
// PRINT RESUME FUNCTION
// =====================================

function printResume() {

    window.print();

}
