function sendMessage() {
    const button = document.getElementById('submitButton');
    const nameEl = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const email = document.getElementById('input-email').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;
    const submitMsg = document.getElementById('submit-msg')
    const focusEl = document.getElementById("focus-el")
    
    if (!nameEl || !lastName || !subject || !message) {
    submitMsg.textContent = '<p id="submitMessage" class="submit-message" aria-live="polite"> Please fill out all required fields (Name, Last Name, Subject, Message)</p>';
    focusEl.focus();
    }else{
        button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
        const mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + nameEl + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
        console.log('Mailto Link:', mailtoLink);
        window.location.href = mailtoLink;
    }
}