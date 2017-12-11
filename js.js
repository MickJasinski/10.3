   $(function() {
    var imgWidth = 400;
    var transtion = 800;
    var carouselList = $("#carousel ul");
    var intervalOne = setInterval(changeSlide, 3000);

  


    function changeSlide() {
        carouselList.animate({ 'marginLeft': -imgWidth }, transtion, moveFirstSlide);
    };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
    };
});


