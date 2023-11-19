const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
    const page = document.querySelector('input.page').value;
    const limit = document.querySelector('input.limit').value;

    let s = document.querySelector('#j-result');
    s.textContent = '';
    if (!(page >= 1 && page <= 10)) {
        s.textContent = 'Номер страницы вне диапазона от 1 до 10';
        return;
    }
    if (!(limit >= 1 && limit <= 10)) {
        s.textContent = 'Лимит вне диапазона от 1 до 10';
        return;
    }
    if (!(limit >= 1 && limit <= 10 && page >= 1 && page <= 10)) {
        s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return;
    }
    // Делаем запрос за данными
    else {
        function useRequest(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = function() {
                if (xhr.status != 200) {
                    console.log('Статус ответа: ', xhr.status);
                } else {
                    const result = JSON.parse(xhr.response);
                    if (callback) {
                        callback(result);
                    }
                }
            };

            xhr.onerror = function() {
                console.log('Ошибка! Статус ответа: ', xhr.status);
            };

            xhr.send();
        };

// Ищем ноду для вставки результата запроса
        const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
        const btnNode = document.querySelector('.j-btn-request');

        /**
         * Функция обработки полученного результата
         * apiData - объект с результатом запроса
         */
        function displayResult(apiData) {
            let cards = '';
            // console.log('start cards', cards);

            apiData.forEach(item => {
                const cardBlock = `
      <div class="card">
        <img
          src="${item.url}"
          class="card-image"
        />
        <p>${item.title}</p>
      </div>
    `;
                cards = cards + cardBlock;
            });

            // console.log('end cards', cards);

            resultNode.innerHTML = cards;
        }

// Вешаем обработчик на кнопку для запрос
        useRequest(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`, displayResult);


    }});