function sendMessage() {
    button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite"> Please fill out all required fields (Name, Last Name, Subject, Message)</p>';
    nameEl.focus();
}