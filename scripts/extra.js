const mouseFollower = document.createElement("div");
const mfS = mouseFollower.style
mfS.position = "absolute";
mfS.width = "40px";
mfS.aspectRatio = "1";
mfS.borderRadius = "50%"
mfS.background = "white"
mfS.boxShadow = "0 0 100px 0 #000";
mfS.zIndex = "1000";
mfS.display = "hidden";

document.body.appendChild(mouseFollower);

window.onpointermove = event => {
    const x = event.clientX
    const y = event.clientY
    mfS.left = x+'px';
    mfS.top = y+40+'px'
}
document.body.onscroll = event => {
}