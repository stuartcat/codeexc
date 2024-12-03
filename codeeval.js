chrome.browserAction.onClicked.addListener(function(tab) { chrome.tabs.executeScript(null, {code: "eval(prompt('Enter code'))"}); })

