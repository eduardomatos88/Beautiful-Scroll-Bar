const progress = document.getElementById("progress-bar")
const totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = () => {
  const progressHeight = (window.pageYOffset / totalHeight) * 100
  progress.style.height = `${progressHeight}%`
}
