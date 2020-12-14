$(document).ready(function(){
    $("img").on("mousedown", function(e){
        e.preventDefault();
    });
    
    $(".search-bar").click(function(){
        $(".search-bar input").focus();
    });


    $(".options span").click(function(){
        $(this).hasClass('off') ? $(this).text('on').removeClass('off') : $(this).text('off').addClass('off');
    });

    $(".tabs li").click(function(){
        var data = $(this).data('tabs');
        $(".tabs li").removeClass("active");
        $(this).addClass("active");
        
        $(".contents-data").removeClass("active");
        $("#" + data).addClass("active");
    });


    $(".photo").click(function(){
        var src = $(this).attr('src');
        $(".overlay-container img").attr('src', src);
        $(".overlay-container").fadeIn(350);
    });

    $(".overlay-container .close").click(function(){
        $(".overlay-container").fadeOut(200);
    });

    $(".filter-category div").click(function(){
        var cat = $(this).data("cat");
        $(".filter-category div").removeClass("active");
        $(this).addClass("active");

        if(cat == 'search-all'){
            $(".search-all").show();    
        }
        else{
            $(".search-all").hide();
            $(".timeline-post." + cat).show();
        }
    });


    $(".add-tags").click(function(){
        $(".tags-container").slideToggle(150);
    });


    $("#create-file").on("change", function(){
        var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
        $(".filename").text(filename);
    });

    if($(".audio-container").length){
        var wavesurfer = WaveSurfer.create({
            container: '#waveform',
            progressColor: '#000',
            barHeight: 3,
            hideScrollbar: true,
            cursorWidth: 0
        });
        
        wavesurfer.load('audio/Echo.mp3');
        
        wavesurfer.on('ready', function () {
            $(".loading-audio").fadeOut(150);
            $("#waveform, .play-btn").delay(180).css("opacity", "200");
        });
        
        $(".play-btn").on("click", function(){
            $(this).toggleClass("play");
            $(this).hasClass("play") ? wavesurfer.play() : wavesurfer.pause();
        });
    }

});


