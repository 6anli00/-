document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const submenus = document.querySelectorAll('.submenu');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            submenus.forEach(submenu => {
                submenu.classList.remove('active');
            });
            const target = document.getElementById(this.getAttribute('href').substring(1));
            target.classList.add('active');
        });
    });

    const fileInput = document.getElementById('file-input');
    const resultDisplay = document.getElementById('result-display');

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            resultDisplay.textContent = '文件已选择，点击处理文件来查看结果。';
        }
    });
});

function handleFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const resultDisplay = document.getElementById('result-display');

    if (file) {
        // 这里应该调用后端API来处理文件
        // 读取文件内容并显示
        const reader = new FileReader();
        reader.onload = function(e) {
            resultDisplay.textContent = '文件内容：' + e.target.result;
        };
        reader.readAsText(file);
    }
}

/* function openFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        // 创建一个指向文件的URL
        const fileUrl = URL.createObjectURL(file);
        // 打开一个新的窗口，并在其中打开文件
        window.open(fileUrl, '_blank');
    }
} */