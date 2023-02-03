function loadButton_OnClick(button){
    button.textContent = "Устанавливается...";

    setTimeout(()=>{
        button.textContent = "Установлено";  
    }, 2000);
}