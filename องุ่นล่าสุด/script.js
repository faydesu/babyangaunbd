let score = 0;
const scoreDisplay = document.getElementById('score');
const catImage = document.getElementById('popcat');
const clickArea = document.getElementById('clickArea');

// ✅ ดึงคะแนนจาก Local Storage
if (localStorage.getItem('popScore')) {
    score = parseInt(localStorage.getItem('popScore'));
    scoreDisplay.textContent = score;
}

// ✅ ฟังก์ชันเปลี่ยนภาพเมื่อกดและปล่อย
function changeImageToClicked() {
    score++;
    scoreDisplay.textContent = score;
    localStorage.setItem('popScore', score);
    catImage.src = 'catbaby.png';  // เปลี่ยนเป็นภาพตอนคลิก
}

function resetImage() {
    catImage.src = 'catcat.png';  // กลับเป็นภาพปกติ
}

// ✅ รองรับการคลิกเมาส์
clickArea.addEventListener('mousedown', changeImageToClicked);
clickArea.addEventListener('mouseup', resetImage);
clickArea.addEventListener('mouseleave', resetImage);

// ✅ รองรับการแตะบนมือถือ
clickArea.addEventListener('touchstart', (event) => {
    event.preventDefault(); // ป้องกันการแตะสองครั้ง
    changeImageToClicked();
});

clickArea.addEventListener('touchend', (event) => {
    event.preventDefault(); 
    resetImage();
});
