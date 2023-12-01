$(document).ready(function() {

    $(window).scroll(function(e){
        let scrollTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollPercent = (scrollTop) / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent*100);

        let about = document.querySelector('.for-blur')
        let blur = Math.round(scrollPercent * 10)
        blur -= 3
        if (blur < 0) { blur = 0 }
        about.style.backdropFilter = `blur(${blur}px)`
        about.style.backgroundColor = `#777${blur}`
    }
)});