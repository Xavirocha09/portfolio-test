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
}