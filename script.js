let capsLock = false;

document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('click', function() {
        const output = document.getElementById('output');
        const keyText = key.textContent;

        if (keyText === 'Space') {
            output.value += ' ';
        } else if (keyText === 'Shift') {
            capsLock = !capsLock;
            key.style.backgroundColor = capsLock ? '#ccc' : '#E0FFFF';
        } else {
            if (capsLock) {
                output.value += keyText.toUpperCase();
            } else {
                output.value += keyText.toLowerCase();
            }
        }
    });
});
