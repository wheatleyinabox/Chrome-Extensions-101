const extensions = 'https://developer.chrome.com/docs/extensions';
const webstore = 'https://developer.chrome.com/docs/webstore';



// extension is set to 'OFF' by default
chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});



// async/await because it's going to be checking for a behavior,
// and this can happen immediately or later, but only if the
// behavior is done? (Promises and such)
chrome.action.onClicked.addListener(async (tab) => {
  if(tab.url.startsWith(extensions) || tab.url.startsWith(webstore))
  {
    // retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // The next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === "ON")
    {
      // insert the css file when the user turns the extension on
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
    else if (nextState === "OFF")
    {
      // remove the css fule when the user turns the extension off
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});