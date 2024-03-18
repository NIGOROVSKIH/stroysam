document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.square-block');

    // Массив с URL для каждой кнопки
    var urls = [
        'https://t.me/mell_coin',
        'https://kick.com/mellstroy271',
        'https://1wgtqa.life/casino/list?open=register#01a4',
        'https://refpakrtsb.top/L?tag=d_852201m_22179c_&site=852201&ad=22179'
    ];

    buttons.forEach(function(button, index) {
        if (index >= 2) { // Проверяем, является ли кнопка третьей или четвёртой
            button.addEventListener('click', function() {
                // Не добавляем ничего к балансу для третьей и четвёртой кнопки
                window.location.href = urls[index];
            });
        } else if (localStorage.getItem('buttonClicked' + index)) {
            button.classList.add('inactive');
            button.disabled = true;
        } else {
            button.addEventListener('click', function() {
                addToBalanceAndDisplay(index + 1);
                window.location.href = urls[index]; // Используем URL из массива urls по индексу кнопки
                localStorage.setItem('buttonClicked' + index, 'true');
                button.classList.add('inactive');
                button.disabled = true;
            });
        }
    });
});

function addToBalanceAndDisplay(amount) {
    if (amount === 3 || amount === 4) {
        return; // Не добавляем ничего к балансу для третьей и четвёртой кнопок
    }

    var balance = localStorage.getItem('balance');
    if (balance === null) {
        balance = 0;
    } else {
        balance = parseFloat(balance);
    }
    balance += amount;
    localStorage.setItem('balance', balance);
}
