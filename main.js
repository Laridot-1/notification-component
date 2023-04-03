const links = document.querySelectorAll("a")
const counter = document.querySelector(".counter")
const btn = document.querySelector(".btn")
const unread = document.querySelectorAll(".unread")

links.forEach(link => {
  link.addEventListener("click", e => e.preventDefault())
})

//Event Listeners
btn.addEventListener("click", read)
unread.forEach(msg => msg.addEventListener("click", opened))

//Functions
function read() {
  unread.forEach(ref => {
    let dot = ref.querySelector(".dot")
    dot.style.display = "none"
    ref.classList.remove("unread")
  })
  counter.style.display = "none"
}

function opened(e) {
  let num = counter.innerHTML
  parseInt(num)
  if (e.currentTarget.classList.contains("unread")) {
    num--
    counter.innerHTML = num
  }
  e.currentTarget.classList.remove("unread")
  let dot = e.currentTarget.querySelector(".dot")
  dot.style.display = "none"
  if(num === 0) {
    counter.style.display = "none"
  }
}