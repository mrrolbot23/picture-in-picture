const button = document.getElementById("button");
const videoElement = document.getElementById("video");
const streamSource = document.getElementById("stream");

// Prompt user to select media stream, pass to video element
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error
    console.log("Oh no! Error: ", error);
  }
}

streamSource.addEventListener("click", selectMediaStream);

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});
