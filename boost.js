document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку улучшения
    var boostButton = document.querySelector('.center-block');

    // Проверяем, была ли кнопка уже нажата при предыдущих посещениях страницы
    if (localStorage.getItem('boostButtonClicked') === 'true') {
        // Если да, делаем кнопку неактивной и меняем её стиль
        boostButton.classList.add('clicked');
        boostButton.disabled = true;
        boostButton.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
        // Устанавливаем текст кнопки
        boostButton.innerHTML = '🪙 КУПЛЕНО';
    }

    // Обработчик события клика по кнопке улучшения
    boostButton.addEventListener('click', function() {
        // Проверяем, не была ли кнопка уже нажата
        if (!boostButton.classList.contains('clicked')) {
            // Получаем текущий баланс из localStorage страницы index.html
            var balance = localStorage.getItem('balance');
            
            // Проверяем, достаточно ли у пользователя средств для покупки
            if (balance >= 10.00000) {
                // Уменьшаем баланс на 0.00010
                balance -= 10.00000;
                
                // Обновляем отображение баланса на странице index.html
                localStorage.setItem('balance', balance);
                
                // Записываем в localStorage информацию о том, что улучшение было куплено
                localStorage.setItem('boostPurchased', 'true');
                
                // Делаем кнопку неактивной и меняем её стиль
                boostButton.classList.add('clicked');
                boostButton.disabled = true;
                boostButton.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
                // Устанавливаем текст кнопки
                boostButton.innerHTML = '🪙 Уже использовано';
                
                // Сохраняем информацию о том, что кнопка была нажата
                localStorage.setItem('boostButtonClicked', 'true');
            } else {
                // Если у пользователя недостаточно средств, выводим сообщение или предпринимаем другие действия
                alert('Недостаточно средств для покупки');
            }
        } else {
            // Если кнопка уже была нажата, выводим сообщение или предпринимаем другие действия
            alert('Улучшение уже было куплено');
        }
    });

    // Получаем кнопку увеличения скорости
    var speedButton = document.getElementById('speedButton');

    // Проверяем, была ли кнопка уже нажата при предыдущих посещениях страницы
    if (localStorage.getItem('speedButtonClicked') === 'true') {
        // Если да, делаем кнопку неактивной и меняем её стиль
        speedButton.disabled = true;
        speedButton.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
        speedButton.textContent = '⏱ КУПЛЕНО';
    }

    // Обработчик события клика по кнопке увеличения скорости
    speedButton.addEventListener('click', function() {
        // Проверяем, не была ли кнопка уже нажата
        if (!speedButton.disabled) {
            // Получаем текущий баланс из localStorage страницы index.html
            var balance = localStorage.getItem('balance');
            
            // Проверяем, достаточно ли у пользователя средств для покупки
            if (balance >= 5.00000) {
                // Уменьшаем баланс на 0.00010
                balance -= 5.00000;
                
                // Обновляем отображение баланса на странице index.html
                localStorage.setItem('balance', balance);
                
                // Сохраняем новое значение времени анимации в локальное хранилище
                localStorage.setItem('animationDuration', '5s');

                // Сохраняем новое значение времени запрета клика в локальное хранилище
                localStorage.setItem('clickTimeout', '5000');
                
                // Делаем кнопку неактивной и меняем её стиль
                speedButton.disabled = true;
                speedButton.style.backgroundColor = 'grey';
                speedButton.textContent = 'Покупаем..';
                
                // Сохраняем информацию о том, что кнопка была нажата
                localStorage.setItem('speedButtonClicked', 'true');
            } else {
                // Если у пользователя недостаточно средств, выводим сообщение или предпринимаем другие действия
                alert('Недостаточно средств для покупки');
            }
        } else {
            // Если кнопка уже была нажата, выводим сообщение или предпринимаем другие действия
            alert('Улучшение уже было куплено');
        }
    });

    // Обработчик события клика по кнопке "Get free coins"
    var profitButton = document.getElementById("profitButton");
    var lastClickTime = localStorage.getItem('lastClickTime');
    if (lastClickTime !== null) {
        var timeElapsed = Date.now() - lastClickTime;
        if (timeElapsed < 10800000) {
            // Если прошло меньше минуты с момента последнего клика, блокируем кнопку
            profitButton.disabled = true;
            profitButton.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
            var countdown = Math.ceil((10800000 - timeElapsed) / 1000);
            profitButton.textContent = 'Осталось ' + countdown + ' секунд';
            var intervalId = setInterval(function() {
                countdown--;
                if (countdown > 0) {
                    profitButton.textContent = 'Осталось ' + countdown + ' секунд';
                } else {
                    clearInterval(intervalId);
                    profitButton.disabled = false;
                    profitButton.style.backgroundColor = '';
                    profitButton.textContent = '🎁 Get free coins';
                }
            }, 1000);
        }
    }
    profitButton.addEventListener('click', function() {
        // Проверяем, не была ли кнопка уже нажата
        if (!profitButton.disabled) {
            // Получаем текущий баланс из localStorage страницы index.html
            var balance = localStorage.getItem('balance');
            
            // Если баланс еще не установлен, устанавливаем его в 0
            if (balance === null) {
                balance = 0;
            } else {
                // Преобразуем строку в число
                balance = parseFloat(balance);
            }
            
            // Увеличиваем баланс на 0.50
            balance += 0.50;
            
            // Обновляем отображение баланса на странице index.html
            localStorage.setItem('balance', balance);

            // Делаем кнопку неактивной и меняем её стиль
            profitButton.disabled = true;
            profitButton.style.backgroundColor = 'grey';

            // Запускаем таймер обратного отсчета
            var countdown = 60; // Время в секундах
            var intervalId = setInterval(function() {
                countdown--;
                // Обновляем текст кнопки
                profitButton.textContent = 'Подождите ' + countdown + ' секунд';
                if (countdown === 0) {
                    // Время вышло
                    clearInterval(intervalId);
                    // Возвращаем кнопке нормальный вид
                    profitButton.disabled = false;
                    profitButton.style.backgroundColor = '';
                    profitButton.textContent = '🎁 Get free coins';
                }
            }, 1000);

            // Сохраняем время клика
            localStorage.setItem('lastClickTime', Date.now());
        }
    });

    // Получаем кнопку увеличения монет
    var coinsButton = document.getElementById('coinsButton');

    // Проверяем, была ли кнопка уже нажата при предыдущих посещениях страницы
    if (localStorage.getItem('coinsButtonClicked') === 'true') {
        // Если да, делаем кнопку неактивной и меняем её стиль
        coinsButton.disabled = true;
        coinsButton.style.backgroundColor = 'rgba(128, 128, 128, 0.1)';
        coinsButton.textContent = '🪙 КУПЛЕНО';
    }

    // Обработчик события клика по кнопке увеличения монет
    coinsButton.addEventListener('click', function() {
        // Получаем текущий баланс из localStorage страницы index.html
        var balance = localStorage.getItem('balance');
        
        // Проверяем, достаточно ли у пользователя средств для покупки
        if (balance >= 10.00000) {
            // Делаем кнопку неактивной и меняем её стиль
            coinsButton.disabled = true;
            coinsButton.style.backgroundColor = 'grey';
            coinsButton.textContent = 'Покупаем..';

            // Сохраняем информацию о том, что кнопка была нажата
            localStorage.setItem('coinsButtonClicked', 'true');
        } else {
            // Если у пользователя недостаточно средств, выводим сообщение или предпринимаем другие действия
            
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку увеличения монет
    var coinsButton = document.getElementById('coinsButton');

    // Обработчик события клика по кнопке увеличения монет
    coinsButton.addEventListener('click', function() {
        // Переход на страницу index.html
        window.location.href = "index.html";
    });

    // Получаем кнопку увеличения скорости
    var speedButton = document.getElementById('speedButton');

    // Обработчик события клика по кнопке увеличения скорости
    speedButton.addEventListener('click', function() {
        // Переход на страницу index.html
        window.location.href = "index.html";
    });

    // Получаем кнопку получения прибыли
    var profitButton = document.getElementById('profitButton');

    // Обработчик события клика по кнопке получения прибыли
    profitButton.addEventListener('click', function() {
        // Переход на страницу index.html
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем кнопку смены изображения
    var imageChangeButton = document.getElementById('imageChangeButton');

    // Проверяем, была ли кнопка уже использована
    if (localStorage.getItem('imageChangeButtonClicked') === 'true') {
        // Если да, полностью удаляем кнопку из DOM
        imageChangeButton.style.display = 'none';
    } else {
        // Обработчик события клика по кнопке смены изображения
        imageChangeButton.addEventListener('click', function() {
            // Получаем текущий баланс пользователя
            var balance = parseFloat(localStorage.getItem('balance'));

            // Проверяем, достаточно ли средств для выполнения операции
            if (balance >= 25.00) {
                balance -= 25.00; // Вычитаем стоимость услуги

                // Сохраняем обновленный баланс
                localStorage.setItem('balance', balance.toString());

                // Меняем флаг смены изображения
                localStorage.setItem('imageChanged', 'true');

                // Сохраняем информацию о том, что кнопка была использована
                localStorage.setItem('imageChangeButtonClicked', 'true');

                // Удаляем кнопку из DOM
                imageChangeButton.remove();

                // Перенаправляем пользователя на index.html
                window.location.href = 'index.html';
            } else {
                alert('Недостаточно USDT');
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var newImageChangeButton = document.getElementById('newImageChangeButton');

    if (localStorage.getItem('newImageChangeButtonClicked') === 'true') {
        newImageChangeButton.style.display = 'none';
    } else {
        newImageChangeButton.addEventListener('click', function() {
            var balance = parseFloat(localStorage.getItem('balance'));

            if (balance >= 50.00) {
                balance -= 50.00;

                localStorage.setItem('balance', balance.toString());
                localStorage.setItem('imageChanged', 'new'); // Обновляем, чтобы указать, какой скин сейчас активен
                localStorage.setItem('newImageChangeButtonClicked', 'true');

                newImageChangeButton.remove();
                window.location.href = 'index.html';
            } else {
                alert('Недостаточно USDT');
            }
        });
    }
});






