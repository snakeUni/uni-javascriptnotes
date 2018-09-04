
const pictureInPictureEnabled = document.pictureInPictureEnabled || window.pictureInPictureEnabled

if (pictureInPictureEnabled) {

} else {
	console.log("浏览器不支持画中画")
}