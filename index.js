const submitBtn = document.getElementById('submitButton');
const nameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const subjectInput = document.getElementById('input-subject');
const messageInput = document.getElementById('input-message');
const submitMessage = document.getElementById('submitMessage');

function sendMessage() {
    let name = nameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    let email = emailInput.value.trim();
    let subject = subjectInput.value.trim();
    let message = messageInput.value.trim();

    if (!name || !lastName || !subject || !message) {
        submitMessage.textContent = "Please fill out all required fields (Name, Last Name, Subject, Message).";
        submitMessage.style.color = "red";
        nameInput.focus();
    } else {
        submitMessage.textContent = "Message sent! ✅";
        submitMessage.style.color = "green";
        const mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
    }
}

submitBtn.addEventListener('click', sendMessage);