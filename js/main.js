console.log('main.js');
$(window).resize(function() {
    console.log('Window Resize width,height=', $(window).width(), ',', $(window).height());
    console.log('Window Resize innerWidth,innerHeight', $(window).innerWidth(), ',', $(window).innerHeight());
    console.log('Window Resize outerWidth,outerHeight', $(window).outerWidth(), ',', $(window).outerHeight());
});