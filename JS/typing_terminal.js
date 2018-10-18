$(document).ready(function(){
    $(".ini-hide").hide();
});
  
$(window).scroll(function(){
    var curBottom = $(window).scrollTop() + $(window).height() - ($(".terminal").height()/2);
    if(curBottom > $(".terminal").position().top){
        startTyping();
    }
});
  
function startTyping(){
    $("#command1").show();
    $("#command1").addClass("typing1");
    $("#command1").one("animationend", function(){
        setTimeout(function(){
            $("#command1").addClass("disabled");
            $("#result1").show();
            $("#cli2").show();
        }, 400); 
        setTimeout(function(){
            $("#command2").show();
            $("#command2").addClass("typing2");
            $("#command2").one("animationend", function(){
                setTimeout(function(){
                    $("#command2").addClass("disabled");
                    $("#result2").show();
                    $("#cli3").show();
                }, 400); 
                setTimeout(function(){
                    $("#command3").show();
                    $("#command3").addClass("typing3");
                    $("#command3").one("animationend", function(){
                        setTimeout(function(){
                            $("#command3").addClass("disabled");
                            $("#result3").show();
                            $("#cli4").show();
                        }, 400); 
                        setTimeout(function(){
                            $("#command4").show();
                            $("#command4").addClass("typing4");
                            $("#command4").one("animationend", function(){
                                setTimeout(function(){
                                    $("#command4").addClass("disabled");
                                    $("#result4").show();
                                    $("#cli5").show();
                                }, 400);
                            });
                        }, 800);
                    });
                }, 800);
            });
        }, 800); 
    });
}