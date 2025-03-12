var players = {}; // Store YouTube player instances
var videos = document.querySelectorAll("iframe"); // Get all iframes
var fraction = 0.8; // Percentage of video that must be visible

// Load YouTube API script if it's not already loaded
if (typeof YT === "undefined" || typeof YT.Player === "undefined") {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Function called when YouTube API is ready
function onYouTubeIframeAPIReady() {
    videos.forEach((video, index) => {
        var videoId = getYouTubeVideoId(video.src);
        if (videoId) {
            players[index] = new YT.Player(video, {
                events: {
                    'onReady': function (event) {
                        console.log("YouTube Player Ready:", videoId);
                    }
                }
            });
        }
    });
}

// Extract YouTube Video ID from URL
function getYouTubeVideoId(url) {
    var match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^?&]+)/);
    return match ? match[1] : null;
}

// Function to check if an element is visible in the viewport
function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
    var visibleFraction = visibleHeight / rect.height;

    return visibleFraction > fraction;
}

// Function to stop videos that are out of view
function stopVideosOutsideView() {
    videos.forEach((video, index) => {
        var player = players[index]; // Get the player instance

        if (player && typeof player.pauseVideo === "function") {
            if (isElementVisible(video)) {
                console.log("Playing video:", index);
                player.playVideo();
            } else {
                console.log("Pausing video:", index);
                player.pauseVideo();
            }
        }
    });
}

// Listen for scrolling, resizing, and page load
window.addEventListener("scroll", stopVideosOutsideView);
window.addEventListener("resize", stopVideosOutsideView);
window.addEventListener("load", stopVideosOutsideView);
