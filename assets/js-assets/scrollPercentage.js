$(document).ready(function() {

    $(window).scroll(function(e){
        let scrollTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollPercent = (scrollTop) / (docHeight - winHeight);

        let about = document.querySelector('.for-blur')
        let blur = Math.round(scrollPercent * 15)
        blur -= 3
        if (blur < 0) { blur = 0 }
        about.style.backdropFilter = `blur(${blur}px)`
        let blur2 = blur * 0.2
        about.style.backgroundColor = `#999${blur2}`
    }
)});