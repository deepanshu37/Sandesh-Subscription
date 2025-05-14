function updateMailCount() {
       const mailCntSpan = document.getElementById('mailCnt');
       const emailTextarea = document.getElementById('eMails');
       const mailCount = parseInt(document.getElementById('mailCnt').innerText, 10);

       const emailLines = emailTextarea.value.split('\n').filter(line => line.trim() !== '');

    mailCntSpan.textContent = emailLines.length;
    if (emailLines.length > 30) {
                mailCnt.style.fontSize="150%";
                mailCnt.style.color="red";
            } else{
                mailCnt.style.fontSize="100%";
                mailCnt.style.color="rgb(36, 36, 36)";
            }

}

function validate() {
    const mailCount = parseInt(document.getElementById('mailCnt').innerText, 10);
    const but =document.querySelector('input[type="submit"]');
    but.style.backgroundColor = "#0400ff";
    if (mailCount > 300000) {
        event.preventDefault(); // Prevent the form from submitting
        alert("Please enter less than 30 recipients")
        but.style.backgroundColor = "#45a049";
        return;
    } else{
        event.preventDefault();
        const form = document.getElementById('emailForm');
        const formData = new FormData(form);
                    fetch('/sendGmail', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.text())
                    .then(message => {
                        alert(message);
                        but.style.backgroundColor = "#45a049";
                    })
                    .catch(error => {
                        console.error('Error sending emails:', error);
                        alert("There was an error sending emails.");
                    });
        }
}