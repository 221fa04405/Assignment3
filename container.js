let isToggled = false;

function toggleChange() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');

    
    if (!isToggled) {
        
        container.style.backgroundColor = '#ff8a80'; 
        text.textContent = 'The text and color have changed!';
        button.textContent = 'Turn Off Changes';
        button.classList.remove('default');
        button.classList.add('disabled-text');
    } else {
        
        container.style.backgroundColor = '#b3e5fc'; 
        text.textContent = 'Hello, this is the original text!';
        button.textContent = 'Click to Change';
        button.classList.remove('disabled-text');
        button.classList.add('default');
    }

    isToggled = !isToggled;
}
