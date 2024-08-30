const asyncbtn = document.getElementById("btn");
const changetext = document.getElementById("text");


asyncbtn.addEventListener("click", () => {
    setTimeout(() => {
        changetext.textContent = "ボタンをクリックしました";
    },2000);
})