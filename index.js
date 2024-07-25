
    const button = document.getElementById('submitButton');
    const nameEl = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;
    const submitMsg = document.getElementById('submit-msg')
    const focusEl = document.getElementById("focus-el")
    
    
    //function sendMessage() {
    //    if (nameEl===false) {
     //       submitMsg.textContent = '<p id="submitMessage" class="submit-message" aria-live="polite"> Please fill out all required fields (Name, Last Name, Subject, Message)</p>';
    //    }
      //  else{
        //    submitMsg.textContent = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
          //  const mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + nameEl + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
            //console.log('Mailto Link:', mailtoLink);
         //   window.location.href = mailtoLink;
        //}
//}

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