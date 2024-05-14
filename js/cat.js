function expose(but, cl) {
    var projs = document.getElementsByClassName("square");

    // hide all boxes
    for (var i = 0; i < projs.length; i++) {
        projs[i].classList.add("hidden");
    }

    // show all boxes with the tag
    for (var i = 0; i < projs.length; i++) {
        if (projs[i].classList.contains(cl)) projs[i].classList.remove("hidden");
    }

    var on = document.getElementsByClassName("active");
    if (on[0].classList !== but.classList) {
        on[0].classList.remove("active");
        but.classList.add("active");
    }
}