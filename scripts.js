let messageCount = 0;

function scrollToTop() {
    const mainContent = document.getElementById('content');
    mainContent.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sendMessage() {
    document.getElementById('comments').value = ''; // Clear the textarea
    messageCount++; // Increment message count
    const messageText = messageCount === 1 ? 'message sent' : 'messages sent';
    document.getElementById('message').innerText = `(${messageCount}) ${messageText}`; // Display count
}
// function that opens your email app and enters automtically the playerink@gmail.com when you open the app
function openEmailClient() {
    window.location.href = 'mailto:playerink@gmail.com';
}

// Add event listener for email us button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('emailButton').addEventListener('click', openEmailClient);
});

