document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен!');
    
    const button = document.getElementById('myButton');
    const demo = document.getElementById('demo');
    
    button.addEventListener('click', function() {
        demo.textContent = 'Кнопка нажата';
        demo.style.color = 'green';
        demo.style.fontWeight = 'bold';
        
        button.style.background = '#2ecc71';
        button.textContent = 'Нажато!';
        
        console.log('Кнопка была нажата');
    });
    
    console.log('JavaScript подключен и работает!');
});