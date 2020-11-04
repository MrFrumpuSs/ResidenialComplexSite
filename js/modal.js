var iframe = $('iframe');
$(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    if(modal == '#modal2') {
        iframe.appendTo(modal);
    }    
    setTimeout( function(){
        $(modal).addClass("open");
    }, 350);
    $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
            $(target).find(".modal").each( function(){
                $(this).removeClass("open");
            });
            setTimeout( function(){
                $(target).removeClass("open");
            }, 350);
        }
        
    });
    
});

$(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
            modal = $($this).data("modal");
    
    $(modal).removeClass("open");
  
    setTimeout( function(){ 
        $(modal).parents(".overlay").removeClass("open");
        if(modal == '#modal2') {
            iframe.detach();
        }
    }, 350);
}); 