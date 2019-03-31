const sendMessage = (tagId, kind, data) => {
  chrome.tabs.sendMessage(tagId, {
    kind: kind,
    data: data
  })
}

// get chrome extention icon click event
chrome.browserAction.onClicked.addListener((tab) => {
  sendMessage(tab.id, MESSAGE_BROWSERADCION_ONCLICK)
})
