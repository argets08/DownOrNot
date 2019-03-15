let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word.trim();
document.getElementById("url").value = word;