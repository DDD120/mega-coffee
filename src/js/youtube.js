// YOUTUBE
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "WjxawH-9b3Q",
    playerVars: {
      autoplay: 1,
      loop: 1,
      rel: 0,
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
