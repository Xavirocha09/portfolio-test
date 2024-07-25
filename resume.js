let topBtn = document.getElementById("top")

window.onscroll = function() {scroll()};

function scroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    }
    

    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 10;
    }