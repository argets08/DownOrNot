console.log('chrome ext background script');

chrome.runtime.onMessage.addListener(receiver);
function receiver(request, sender, sendResponse) {
  var alert = "";
  var url = "";

  word = request.text;
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    url = new URL(tabs[0].url).hostname;
    // alert("Inner Message: " + url);
    fetch('https://downforeveryoneorjustme.com/' + url)
      .then(function (response) {
        var retValue = response.text();
        return retValue;
      })
      .then(function (respBody) {
        if (respBody.includes('It\'s just you.')) {
          this.alert(url + " is Not Down for everyone, just you.");
        } else if (respBody.includes('It\'s not just you!')) {
          this.alert(url + " is Down for everyone.");
        }
      });
  });
}
