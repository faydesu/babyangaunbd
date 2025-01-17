let score = 0;
const scoreDisplay = document.getElementById('score');
const catImage = document.getElementById('popcat');
const clickArea = document.getElementById('clickArea');

// ✅ ดึงคะแนนจาก Local Storage
if (localStorage.getItem('popScore')) {
    score = parseInt(localStorage.getItem('popScore'));
    scoreDisplay.textContent = score;
}

// ✅ เมื่อคลิก เพิ่มคะแนน + เปลี่ยนภาพขณะคลิกเท่านั้น
clickArea.addEventListener('mousedown', () => {
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem('popScore', score); 
    catImage.src = 'catbaby.png'; // เปลี่ยนเป็นรูปคลิกทันที
});

// ✅ กลับเป็นภาพปกติเมื่อปล่อยคลิก
clickArea.addEventListener('mouseup', () => {
    catImage.src = 'catcat.png'; // กลับเป็นภาพปกติ
});

// ✅ กรณีลากออกนอกหน้าจอแล้วปล่อย
clickArea.addEventListener('mouseleave', () => {
    catImage.src = 'catcat.png';
});
