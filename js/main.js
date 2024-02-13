let slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: '1',
    gutter: "",
    mouseDrag: true,
    nav: true,
    loop: true,
    controlsContainer: '#controls',
    prevButton: '.previous',
    nextButton: '.next',
    autoplayButton: true,
    autoplay: false,
    responsive: {
        640: {
        items: 1
        },
        768: {
        items: 1
        },
        1400: {
        items: 1
        }
    }
    });