const changebtn = document.getElementById("btn");
const changetext = document.getElementById("text");

changebtn.addEventListener("click",() => {
    changetext.textContent = "ボタンをクリックしました";
});