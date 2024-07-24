const submitBtn = document.getElementById('submitButton')

    submitBtn.addEventListener('click', function() {
    

    console.log('Button clicked');
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    if (!name || !lastName || !subject || !message) {
        return alert('Please fill out all required fields (Name, Last Name, Subject, Message).')
        
    }

    
});

function sendMessage() {
    // Get the button element
    const button = document.getElementById('submitButton');
    const nameEl = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;
    // Replace the button with a paragraph
    if (!nameEl || !lastName || !subject || !message) {
    button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite"> Please fill out all required fields (Name, Last Name, Subject, Message)</p>';
    nameEl.focus();
    }else{
        button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
        const mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + nameEl + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
        console.log('Mailto Link:', mailtoLink);
        window.location.href = mailtoLink;
    }
    