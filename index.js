function loadHeader() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("header").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "header.html", true);
    xhttp.send();
}
function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("footer").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
}
window.addEventListener('load', loadHeader);
window.addEventListener('load', loadFooter);
// This will be called whenever the window size changes
function checkSize() {
    // Hide the cards when the window width reaches 767px or 480px
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".card:nth-child(n+3)").hide();
    }
    else if (window.matchMedia("(max-width: 600px)").matches) {
        $(".card:nth-child(n+2)").hide();
    } else {
        // Show the hidden cards when the window width goes beyond 767px and 480px
        $(".card").show();
    }
}

// Call the function initially to check the size
checkSize();

// Call the function whenever the window size changes


// Call the function whenever the window size changes
$(window).resize(checkSize);