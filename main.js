document.addEventListener("DOMContentLoaded", function() {
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }
});

    
document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, была ли смена изображения
    if (localStorage.getItem('imageChanged') === 'true') {
        // Если да, меняем src для изображения
        document.querySelector('.centered-image img').src = "photo_2024-03-17_19-41-14-removebg-preview.png";
    }
    
    
    // Добавляем обработчик клика для применения анимации "прогибания"
    document.querySelector('.centered-container').addEventListener('click', function(event) {
        var image = document.querySelector('.centered-image img');
        image.classList.add('squeeze-animation');
        setTimeout(function() {
            image.classList.remove('squeeze-animation');
        }, 500); // Совпадает с продолжительностью анимации
    });
}); 

document.addEventListener("DOMContentLoaded", function() {
    var imageStatus = localStorage.getItem('imageChanged');
    var centeredImage = document.querySelector('.centered-image img');

    if (imageStatus === 'true') {
        centeredImage.src = "photo_2024-03-17_19-41-14-removebg-preview.png"; // Путь к первому скину
    } else if (imageStatus === 'new') {
        centeredImage.src = "dog.png"; // Путь ко второму скину
    }
});


var canClick = true;
var clickTimeout = 10000;

function setClickTimeout() {
    canClick = false;
    setTimeout(function() {
        canClick = true;
    }, clickTimeout);
}

var storedClickTimeout = localStorage.getItem('clickTimeout');
if (storedClickTimeout !== null) {
    clickTimeout = parseInt(storedClickTimeout);
}

document.querySelector('.centered-image img').addEventListener('click', function() {
    if (canClick) {
        var image = this;
        image.classList.add('shake-image');
        setTimeout(function() {
            image.classList.remove('shake-image');
        }, 500);

        canClick = false;
        var localClickTimeout = localStorage.getItem('clickTimeout');
        setTimeout(function() {
            canClick = true;
        }, localClickTimeout ? parseInt(localClickTimeout) : 10000);

        var boostPurchased = localStorage.getItem('boostPurchased');
        var increment = boostPurchased === 'true' ? 0.00500 : 0.00100;

        var progressBarContainer = document.querySelector('.progress-bar-container');
        progressBarContainer.classList.remove('hidden');

        var progressBar = document.querySelector('.progress-bar');
        progressBar.style.animationPlayState = 'running';

        progressBar.addEventListener('animationend', function() {
            progressBarContainer.classList.add('hidden');
        }, {once: true});

        var balanceElement = document.querySelector('.balance-container p');
        var balance = parseFloat(balanceElement.textContent);
        balance += increment;
        balanceElement.textContent = balance.toFixed(5);

        localStorage.setItem('balance', balance);
    }
});

var balance = localStorage.getItem('balance');
if (balance === null) {
    balance = 0;
} else {
    balance = parseFloat(balance);
}

var balanceElement = document.querySelector('.balance-container p');
balanceElement.textContent = balance.toFixed(5);

document.querySelector('.menu-button').addEventListener('click', function() {
    var balanceElement = document.querySelector('.balance-container p');
    var balance = parseFloat(balanceElement.textContent);
    if (balance >= 0.0000) {
        window.location.href = 'pay.html';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var targetElement = event.target;
            var isBatteryButton = targetElement.classList.contains('image2') ||
                                  targetElement.closest('.menu-button').classList.contains('image2');
            if (isBatteryButton) {
                window.location.href = 'boost.html';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var progressBarContainer = document.querySelector('.progress-bar-container');
    var progressBar = document.querySelector('.progress-bar');
    var animationDuration = localStorage.getItem('animationDuration');
    if (animationDuration !== null) {
        progressBar.style.animationDuration = animationDuration;
    }

    progressBar.addEventListener('animationend', function() {
        progressBarContainer.classList.add('hidden');
    }, {once: true});
});

document.querySelector('.menu-button.image3').addEventListener('click', function() {
    window.location.href = 'task.html';
});

document.querySelector('.centered-container').addEventListener('click', function(event) {
    // Показываем сообщение
    var waitMessage = document.getElementById('waitMessage');
    waitMessage.style.display = 'block'; // Показываем надпись

    setTimeout(function() {
        waitMessage.style.display = 'none'; // Скрываем надпись через 2 секунды
    }, 5000); // 2000 миллисекунд = 2 секунды

    // Остальной код для обработки клика (если нужно)
});

document.addEventListener("DOMContentLoaded", function() {
    var centeredContainer = document.querySelector('.centered-container');
    var tapWords = ['Мел', 'Дай', 'Деньги']; // Массив слов для повторяющегося порядка

    centeredContainer.addEventListener('click', function(event) {
        // Создаем элемент для слова
        var tapText = document.createElement('div');
        var currentWord = tapWords.shift(); // Получаем первое слово из массива
        tapWords.push(currentWord); // Перемещаем первое слово в конец массива
        tapText.textContent = currentWord;
        tapText.classList.add('tap-text');

        // Добавляем стили для слова
        tapText.style.position = 'absolute';
        tapText.style.top = event.clientY + 'px';
        tapText.style.left = event.clientX + 'px';

        // Добавляем слово в контейнер
        document.body.appendChild(tapText);

        // Добавляем класс анимации для слова
        tapText.classList.add('fly-up');

        // Через некоторое время убираем слово
        setTimeout(function() {
            document.body.removeChild(tapText);
        }, 2000);
    });
});





