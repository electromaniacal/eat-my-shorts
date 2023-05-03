var host = "https://www.youtube.com/watch?v=";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+\/shorts\/([\S\s]*)/)[1]};
    },
    {
        urls: [
            "http://www.youtube.com/shorts/*",
            "https://www.youtube.com/shorts/*"
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);