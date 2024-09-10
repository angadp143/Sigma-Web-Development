function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const randomBgColor = getRandomColor();
    const randomTextColor = getRandomColor();
    box.style.backgroundColor = randomBgColor;
    box.style.color = randomTextColor;
});