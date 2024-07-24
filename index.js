const submitBtn = document.getElementById('submitButton')

    submitBtn.addEventListener('click', function() {
    var name = document.getElementById('input-name').value;
    var lastName = document.getElementById('input-lastname').value;
    var email = document.getElementById('input-email').value;
    var subject = document.getElementById('input-subject').value;
    var message = document.getElementById('input-message').value;

    console.log('Button clicked');
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    if (!name || !lastName || !subject || !message) {
        return alert('Please fill out all required fields (Name, Last Name, Subject, Message).')
        
    }

    var mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
    console.log('Mailto Link:', mailtoLink);
    window.location.href = mailtoLink;
});

function sendMessage() {    
    // Replace the button with a paragraph
    submitBtn.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
    
    // Get the home link element and add focus to it
    document.getElementById('homeLink').focus();
}