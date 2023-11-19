const btn = document.querySelector('.j-btn-request')

btn.addEventListener('click', () => {
    const value1 = document.querySelector('input.num1').value;
    const value2 = document.querySelector('input.num2').value;

    let s = document.querySelector('#j-result');
    s.textContent = '';
    if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
        console.log('число вне диапазона от 100 до 300');}
    else {
        fetch(`https://dummyimage.com/${value1}x${value2}/`)
            .then((response) => {
                document.querySelector('img').src = response.url;
            });
    };
});