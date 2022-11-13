$(document).ready(function (){

    $('#navbarMenuBtn').on("click", function (event){
        console.log("clicked")
        if($(this).html() === "Menu"){
            $(this).html("close");
            $('#navbarList').css("display", "initial").css("transition-timing-function", "ease");
            $('main').css("display", 'none');
            $('body').css('background-color', '#F0F0F0');
            $('.navbar').css('background-color', '#F0F0F0');
            $('header').css('background-color', '#F0F0F0');


        }
        else if($(this).html() === "close"){
            $(this).html("Menu");
            $('#navbarList').css("display", "none")
            $('main').css("display", 'block');
            $('body').css('background-color', 'white');
            $('.navbar').css('background-color', 'white');
            $('.moreProjectsBtn').css('background-color', 'white');
            $('header').css('background-color', 'white');

        }
    })

    $('#moreProjectsExpandBtn').on("click", function (event){
        if ($(this).html() === "expand"){
            $(this).html("close")
            $('#moreProjectsDetail').css('display', "inline-flex");
        }else if($(this).html() === "close"){
            $(this).html("expand")
            $('#moreProjectsDetail').css('display', "none");
        }
    })
    $('#moreProjectsExpandBtn1').on("click", function (event){
        if ($(this).html() === "expand"){
            $(this).html("close")
            $('#moreProjectsDetail1').css('display', "inline-flex");
        }else if($(this).html() === "close"){
            $(this).html("expand")
            $('#moreProjectsDetail1').css('display', "none");
        }
    })
    $('#moreProjectsExpandBtn2').on("click", function (event){
        if ($(this).html() === "expand"){
            $(this).html("close")
            $('#moreProjectsDetail2').css('display', "inline-flex");
        }else if($(this).html() === "close"){
            $(this).html("expand")
            $('#moreProjectsDetail2').css('display', "none");
        }
    })
    $('#moreProjectsExpandBtn3').on("click", function (event){
        if ($(this).html() === "expand"){
            $(this).html("close")
            $('#moreProjectsDetail3').css('display', "inline-flex");
        }else if($(this).html() === "close"){
            $(this).html("expand")
            $('#moreProjectsDetail3').css('display', "none");
        }
    })


})