let score = 0;
const scoreDisplay = document.getElementById('score');
const catImage = document.getElementById('popcat');
const clickArea = document.getElementById('clickArea');

// ✅ ดึงคะแนนจาก Local Storage
if (localStorage.getItem('popScore')) {
    score = parseInt(localStorage.getItem('popScore'));
    scoreDisplay.textContent = score;
}

// เมื่อคลิกเพิ่มคะแนนและเปลี่ยนภาพ
clickArea.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem('popScore', score); // ✅ บันทึกคะแนนลง Local Storage
    catImage.src = 'catbaby.png';
});

// ✅ เมื่อกดค้าง เปลี่ยนภาพแต่ไม่เพิ่มคะแนน
clickArea.addEventListener('mousedown', () => {
    catImage.src = 'catbaby.png';
});

// ✅ เมื่อปล่อยเปลี่ยนกลับเป็นภาพปกติ
clickArea.addEventListener('mouseup', () => {
    catImage.src = 'catcat.png';
});

// ✅ กรณีลากออกนอกหน้าจอแล้วปล่อย
clickArea.addEventListener('mouseleave', () => {
    catImage.src = 'catcat.png';
});