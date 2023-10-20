    // var leftWindow = document.getElementById("leftWindow");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = openBurger;
    // closeBtn.onclick = closeBurger;

    /* Set the width of the side navigation to 250px */
    function openBurger() {
        leftWindow.classList.add("active");
    }

    /* Set the width of the side navigation to 0 */
    function closeBurger() {
        leftWindow.classList.remove("active");
    }

    // When you click anywhere (exept the menu) it disappear
    window.onclick = function(){
        var leftWindow = document.getElementById('leftWindow');
        var openBtn = document.getElementById("openBtn");
        document.onclick = function(e){
                if(e.target.id !== 'leftWindow' && e.target.id !=='openBtn'){
                leftWindow.classList.remove("active");
            }
        };
    };