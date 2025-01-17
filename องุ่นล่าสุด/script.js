let score = 0;
const scoreDisplay = document.getElementById('score');
const catImage = document.getElementById('popcat');
const clickArea = document.getElementById('clickArea');

// ✅ ดึงคะแนนจาก Local Storage
if (localStorage.getItem('popScore')) {
    score = parseInt(localStorage.getItem('popScore'));
    scoreDisplay.textContent = score;
}

// ✅ เปลี่ยนภาพและเพิ่มคะแนนเมื่อคลิก
clickArea.addEventListener('mousedown', () => {
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem('popScore', score);
    catImage.src = 'catbaby.png';  // เปลี่ยนภาพเป็น catbaby.png
});

// ✅ กลับเป็นภาพปกติเมื่อปล่อยคลิก
clickArea.addEventListener('mouseup', () => {
    catImage.src = 'catcat.png';  // กลับเป็นภาพ catcat.png
});

// ✅ รองรับการแตะบนหน้าจอมือถือ
clickArea.addEventListener('touchstart', (event) => {
    event.preventDefault();  // ป้องกันการแตะสองครั้ง
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem('popScore', score);
    catImage.src = 'catbaby.png'; 
});

// ✅ กลับเป็นภาพปกติเมื่อปล่อยนิ้วบนมือถือ
clickArea.addEventListener('touchend', () => {
    catImage.src = 'catcat.png'; 
});
