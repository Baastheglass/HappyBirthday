//Page 1 start
var passwordEntered = $("input");
var submitButton = $("button");
function buttonClick()
{
    if($(passwordEntered).val() === "kheermix")
    {
        $(passwordEntered).val("");
        var audio = new Audio("./correct.mp3");
        audio.play();
        $("body").addClass("correct");
        setTimeout(function()
        {
            $("body").removeClass("correct");
        }, 900);
        setTimeout(function()
        {
            window.location.replace("./mainpage.html");
        }, 1000);
    }   
    else
    {
        var audio = new Audio("./incorrect.mp3");
        audio.play();
        $("body").addClass("error");
        setTimeout(function()
        {
            $("body").removeClass("error");
        }, 1000);
        $(passwordEntered).val("");
    }
}
function enterPress()
{
    if(event.keyCode === 13)
        buttonClick();
}
$(submitButton).click(buttonClick);
$(document).keypress(enterPress);
//Page 1 end

//Page 2 start
var image = $("img");
var num = 25;
var whoosh = new Audio("./whoosh.mp3");
if($('title').text() === ":D")
{
    setTimeout(function()
    {    
        var sound = new Audio("./trumpet.mp3");
        sound.play();
    }, 750);
}
function giftAnimation()
{
    if(event.keyCode === 32 && num > 0)
    {
        num-=5;
        if(num === 10)
        {
            alert("I promise this leads somewhere, I just wanted to annoy you first :D");
        }
        whoosh.play();
        setTimeout(function()
        {
            $(image).animate(
                {
                    "top" : "+=75%"
                }
            ).fadeOut();     
        },500);
        // $(image).animate(
        //     {
        //         "top" : "+=75%"
        //     }
        // ).fadeOut();
        // $(image).fadeOut();
        setTimeout(function()
        {
            $(image).animate(
                {
                    "width" : num + '%',
                    "top" : "-=75%"
                }
            ).fadeIn();
            // $(image).animate(
            //     {
            //         "width" : num + '%'
            //     }
            // ).fadeIn();
        },500);   
    }
    if(num === 0)
    {
        setTimeout(function()
        {
            $("img").before("<button>Claim thy prize</button>");
            $("button").click(function()
            {
                var clac = new Audio("./click.mp3");
                clac.play();
                window.location.replace("https://drive.google.com/file/d/1QnWAWdCmobdbdamoYh85fBXePKWjESbq/view?usp=sharing");            
            });
            num -= 5;
            $("#inst").text("Press the button");
        },500);
    }
}
$(document).keypress(giftAnimation);

