
    const button = document.getElementById('submitButton');
    const nameEl = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;
    const submitMsg = document.getElementById('submit-msg')
    const focusEl = document.getElementById("focus-el")

function sendMessage() {
    // Get the message display element
    const submitMsg = document.getElementById('submit-msg');
    const name = document.getElementById('input-name').value.trim();
    const lastName = document.getElementById('input-lastname').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const message = document.getElementById('input-message').value.trim();
    const subjectVal = document.getElementById("input-subject").value.trim()

    if (name && lastName && email) {
        // Assuming subject is either a field in your form or a predefined variable
        const submitBtn= document.getElementById("submitButton")
        let subject = `Form Inquiry - ${subjectVal} - ${lastName},${name}`
        const mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
        
        window.open(mailtoLink, '_blank');
        submitMsg.innerHTML ='<p id="submitMessage" class="submit-message" aria-live="polite">Success! ✅</p>'
        submitBtn.outerHTML = '<br> <a href="index.html"><button id="homeLink">Home</button></a><br> <a href="projects.html"><button>check out my Projects Page</button></a><br><a href="contact.html"><button>Send another message</button></a>'
        document.getElementById('homeLink').focus(); // Assuming 'homeLink' exists
    } else {
        submitMsg.innerHTML = " "
        if (!name) {
            document.getElementById('input-name').focus();
             submitMsg.innerHTML += '<p class="error-message" aria-live="assertive">⚠️ Please enter your Name</p>';
        } else if (!lastName) {
           
            document.getElementById('input-lastname').focus();
            submitMsg.innerHTML += '<p class="error-message" aria-live="assertive">⚠️ Please enter your Last Name </p>'
            
        } else if (!email) {
            
            document.getElementById('input-email').focus();
            submitMsg.innerHTML += '<p class="error-message" aria-live="assertive">⚠️ Please enter your Email </p>'

        } else if (!subject) {
            
            document.getElementById('input-subject').focus();
            submitMsg.innerHTML += '<p class="error-message" aria-live="assertive">⚠️ Please enter a subject </p>'
        }
    }  
}

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

    const emailBtn = document.getElementById('email-btn');
    const linkedInBtn = document.getElementById('linkedin-btn');
    const phoneBtn = document.getElementById('phone-btn');
    const contactInfo = document.getElementById('contact-field');
    const myPhone = `+1(819)-919-2186`;
    const myEmail = "rocha.javier.9999@gmail.com";
    const myLinkedin = "https://www.linkedin.com/in/javier-rocha-m-sc-8b247b187/";
    
    // Store original HTML content
    const originalEmailHTML = emailBtn.innerHTML;
    const originalLinkedInHTML = linkedInBtn.innerHTML;
    const originalPhoneHTML = phoneBtn.innerHTML;
    
    emailBtn.addEventListener('click', function() {
        resetButtons();
        emailBtn.innerHTML = `<div class="contactContainerInfo">${myEmail}<button onclick="copyToClipboard('${myEmail}')"><img src="elements/copy.png" </button></div>`;
    });
    
    linkedInBtn.addEventListener('click', function() {
        resetButtons();
        linkedInBtn.innerHTML = `<div class="contactContainerInfo"><a href="${myLinkedin}" target="_blank">My LinkedIn</a></div>`;
    });
    
    phoneBtn.addEventListener('click', function() {
        resetButtons();
        phoneBtn.innerHTML = `<div class="contactContainerInfo">${myPhone}<button onclick="copyToClipboard('${myEmail}')"><img src="elements/copy.png" </button></div>`;
    });
    
    function resetButtons() {
        // Reset all buttons to their original HTML content
        emailBtn.innerHTML = originalEmailHTML;
        linkedInBtn.innerHTML = originalLinkedInHTML;
        phoneBtn.innerHTML = originalPhoneHTML;
    }
