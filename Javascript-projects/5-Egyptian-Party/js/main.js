// Start open navbar
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
// End open navbar

// Start close navbar
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
// End close navbar

// Start scroll
$('a').click(function () {
    let sectionID = $(this).attr("href");
    let positionOfSection = $(sectionID).offset().top;
    $("html,body").animate({scrollTop: positionOfSection},2000);
});
// End scroll

// Start signer
$(document).ready(function ()
{
    $('#signer .signer-caption:first').css("display", "block");
    $('#signer h3').click(function () {
        $(this).next().slideToggle(500);
        $('#Signer .signer-caption').not($(this).next()).slideUp(500);
    });
});
// End signer

// Start count
function countDown() {
    const now = new Date();
    const eventDate = new Date(2022, 1 , 1);
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;

    let seconds = Math.floor(remTime/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24)-30;

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = `<h3>${days} D</h3>`;
    document.getElementById("hours").innerHTML = `<h3>${hours} h</h3>`;
    document.getElementById("minutes").innerHTML = `<h3>${minutes} m</h3>`;
    document.getElementById("seconds").innerHTML = `<h3>${seconds} s</h3>`;
    setInterval(countDown,1000)

}
countDown();
// End count

// Start Time of party
$(function () {
    "use strick";
    let max = 100;
    $('textarea').keyup(function () {
        let len = $(this).val().length;
        let character = max -len;
        if (character <= 0)
        {
            $('#char').text("Your available character finished");
        }else
        {
            $('#char').text(character);
        }
    });

})
// End Time of party

// Start change of color
let allColors = $('.boxColors li');
allColors.eq(0).css("background-color", "#202123");
allColors.eq(1).css("background-color", "#B8BCC2");
allColors.eq(2).css("background-color", "#EA80FC");
allColors.eq(3).css("background-color", "#00DAC6");
allColors.eq(4).css("background-color", "#4F9B29");
allColors.eq(5).css("background-color", "#28B3ED");
allColors.eq(6).css("background-color", "#FD7424");
allColors.eq(7).css("background-color", "#F7367E");
allColors.eq(8).css("background-color", "#ffffff");

$('.boxColors li').click(function () {
    let chooseColor = $(this).css("background-color");
    $('.changeColor').css("color", chooseColor);
})
$(".boxColors i").click(function(){


    let leftAllBox = $('.boxColors').css("left");

    let ulWidth = $(".boxColors ul").outerWidth();

    if( leftAllBox == "0px" )
    {
        $(".boxColors").animate({left: `-${ulWidth}`},500);

    }
    else
    {
        $(".boxColors").animate({left: `0px`},500);
    }
})
// End change of color

// Start scroll links of navbar
$('html, body').animate({scrollTop: $('#mySideNav a').offset().top}, 1000);
// End scroll links of navbar

// Start loading
$(document).ready(function () {
    $('#loading').fadeOut(2000, function () {
        $('body').css("overflow", "visible")
    })
})
// End loading

// Start btn Up
let aboutOffest = $("#signer").offset().top;
$(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    if (windowScroll > aboutOffest)
    {
        $('#btnUp').fadeIn(500);
    }else {
        $('#btnUp').fadeOut(500);
    }
})
$('#btnUp').click(function () {
    $('html,body').animate({scrollTop: 0},2000);
})
// End btn Up