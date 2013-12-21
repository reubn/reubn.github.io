$("#instdown").click(function() {
    $("#feedone").toggleClass('biginst');
        $('html, body').animate({
         scrollTop: $("#feedone").offset().top
     }, 500);
        if ($("#instdown").text() == "More")
       $(this).text("Less")
    else
       $(this).text("More");
});
    var userFeed = new Instafeed({
        get: 'user',
        userId: 217395436,
        accessToken: '217395436.467ede5.d89832d915a24d70a9abf6e396b82d37',
        limit: -1,
        template: '<a href="{{link}}"><img class="instimg" src="{{image}}" /></a>',
        target: 'feedone',
        sortBy: 'most-liked',
    });
    userFeed.run();
    $('.header').css({'background-image': 'url(img/header' + Math.floor(Math.random() * 5) + '.png' + ')'});