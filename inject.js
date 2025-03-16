const script = document.createElement("script");
script.src = chrome.runtime.getURL("geolocation_override.js");
script.onload = () => script.remove(); // Clean up after execution
document.documentElement.appendChild(script);
