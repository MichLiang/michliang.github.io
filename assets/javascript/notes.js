window.onload = function() {
    const acc = document.getElementsByClassName("accordion");
    console.log(acc);
    console.log("hi");
    
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            console.log("Toggling", this.classList)
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");
    
            /* Toggle between hiding and showing the active panel */
            const panel = this.nextElementSibling;
            console.log(panel)
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
};
