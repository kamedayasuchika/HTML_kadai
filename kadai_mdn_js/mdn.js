const today = new Date(); //今日の日付

const year = today.getFullYear();   //年
const month = today.getMonth() + 1; //月
const day = today.getDate();        //日    

console.log(year + "年" + month + "月" + day + "日");