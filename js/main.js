// 
const genaratedPin = document.getElementById('genarated_pin');
const genaratePin = document.getElementById('genarate_pin');
const insertPin = document.getElementById('insert_pin');
const verifyBtn = document.getElementById('verify');
const actionLeft = document.getElementById('attempst');
const actionLeftWrap = document.querySelector('p.action-left');
const wrongNotification = document.querySelector('.wrong');
const successNotification = document.querySelector('.success');
const buttons = document.querySelectorAll('div.button');
let attempts = parseInt(actionLeft.innerText);

verifyBtn.addEventListener('click', function () {
    if (attempts === 0) {
        actionLeftWrap.innerHTML = 'No Attempts Left, Try after 1 seconed!';
        wrongNotification.style.display = 'block';
        return;
    }
    if (insertPin.value.length !== 4) {
        alert('insert 4 Digits');
        return;
    }
    if (insertPin.value === genaratedPin.value) {
        successNotification.style.display = 'block';
        wrongNotification.style.display = 'none';
        attempts = 3
        actionLeft.innerText = attempts;
    } else {
        successNotification.style.display = 'none';
        wrongNotification.style.display = 'block';
        attempts--;
        actionLeft.innerText = attempts;
    }
    
});

buttons.forEach(function (e) {
    e.addEventListener('click', function (e) {
        if (e.target.innerText === "C") {
            insertPin.value = '';
            return;
        } else if (e.target.innerText === "<") {
            let pin = insertPin.value; 
            pin = pin.split("");
            pin.pop();
            pin = pin.join(''); 
            insertPin.value = pin;
            return;
        }
        insertPin.value += e.target.innerText;
    }); 
});

genaratePin.addEventListener('click', function () {
    genaratedPin.value = getRandomPin();
});

function getRandomPin() {
    let pin = Math.round(Math.random() * 10000);
    pin = pin + "";
    //console.log(pin.length);
    if (pin.length == 4) {
        return pin;
    } else { 
        return getRandomPin();
    }
}