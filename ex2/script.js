for (let i = 1; i <= 3; i++) {

    let element = document.getElementById("el_" + i);
    let list = document.getElementById(element.id + "_list");

    element.addEventListener('mouseover', () => {
        list.style.visibility = "visible";
        list.style.opacity = 1;
        element.style.height = "300px";
    })
    element.addEventListener('mouseleave', () => {
        list.style.opacity = 0;
        element.style.height = "100px";
        list.style.visibility = "hidden";
    });


}