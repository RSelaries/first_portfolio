$(document).ready(function() {

    $(window).scroll(function(e){
        let scrollTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollPercent = (scrollTop) / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent*100);

        document.documentElement.style.setProperty('--scroll-percent', scrollPercentRounded)
    }
)});