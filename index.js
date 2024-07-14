document.getElementById('send-button').addEventListener('click', function() {
    var name = document.getElementById('input-name').value;
    var lastName = document.getElementById('input-lastname').value;
    var email = document.getElementById('input-email').value;
    var subject = document.getElementById('input-subject').value;
    var message = document.getElementById('input-message').value;

    if (!name || !lastName || !subject || !message) {
        alert('Please fill out all required fields (Name, Last Name, Subject, Message).');
        return;
    }

    var mailtoLink = `mailto:rocha.javier.9999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message)}`;
    window.location.href = mailtoLink;
});