const submitBtn = document.getElementById('submitButton')

    submitBtn.addEventListener('click', function() {
    let name = document.getElementById('input-name').value;
    let lastName = document.getElementById('input-lastname').value;
    let email = document.getElementById('input-email').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;

    if (!name || !lastName || !subject || !message) {
        submitBtn.outerHTML = 'Please fill out all required fields (Name, Last Name, Subject, Message).'
        document.getElementById('input-name').focus();
    }
    else{
        submitBtn.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';

    }

    const mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
    window.location.href = mailtoLink;
});
