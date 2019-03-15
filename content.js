console.log("Content Script Running");

window.addEventListener('mouseup', wordSelected);

function wordSelected() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0 && selectedText === 'Service Unavailable') {
        console.log(selectedText);
        let message = {
            text: selectedText
        };
        chrome.runtime.sendMessage(message);
    }
}