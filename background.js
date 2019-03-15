console.log('chrome ext background script');

chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse) {
  word = request.text;
  console.log(word);
  window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
}