$(document).ready(function (){
    $(window).on("scroll", function (event){
        const scrolls = window.scrollY;
        console.log(scrolls);

    })
    $('#intro-text').on("load", function (event){
        $(this).css("font-size", "4 rem");
    })
    $('#navbar-button').on("click", function (event){
        console.log("clicked")
        if($(this).html() === "Menu"){
            $(this).html("close");
            $('#navbar-list').css("display", "inherit").css("transition-timing-function", "ease");
            $('#main').css("display", 'none');
        }
        else if($(this).html() === "close"){
            $(this).html("Menu");
            $('#navbar-list').css("display", "none")
            $('#main').css("display", 'initial');
        }


    })
})
