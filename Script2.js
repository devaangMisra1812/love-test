const container = document.getElementById('Form');
const tryAgainButton = document.getElementById('TryAgainButton');
const enterNameInput = document.getElementById('EnterName');
const lrInput = document.getElementById('LRinput');
const checkButton = document.getElementById('checkButton');
const resultMessage = document.getElementById('Heading');

function hideAll() {
    container.style.display = 'none';
    tryAgainButton.style.display = 'block';
}

function showAll() {
    container.style.display = 'block';
    tryAgainButton.style.display = 'none';
    document.getElementById('Con').style.display = 'none';
    document.getElementById('Success').style.display = 'none';
    document.getElementById('Fail').style.display = 'none';
}

tryAgainButton.addEventListener('click', function(){
    showAll()
    document.getElementById('Heading').innerText = "For that one girl (but she's trying again!)";
    document.getElementById('Heading').style.color = 'black';
    enterNameInput.value = '';
    lrInput.value = '';
})


document.addEventListener('DOMContentLoaded', function () {
    

    checkButton.addEventListener('click', function () {
        const enteredName = enterNameInput.value.toUpperCase();
        const loveRanking = parseFloat(lrInput.value);

        if ((enteredName === 'LINA COLADA' || enteredName === 'LINA-COLADA' || enteredName === 'LINACOLADA') && loveRanking > 10) {
            resultMessage.innerText = 'You succeeded!';
            resultMessage.style.color = 'green';
            resultMessage.style.display = 'block';
            document.getElementById('Success').style.display = 'block';
            document.getElementById('Con').style.display = 'block';

            hideAll();
        } else {
            resultMessage.innerText = "You failed, you're not my girl.";
            resultMessage.style.color = 'red';
            resultMessage.style.display = 'block';
            document.getElementById('Fail').style.display = 'block';
            hideAll();
        }
    });
});
