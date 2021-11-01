const windowContainer = document.querySelector(".window-container")
const addBtn = document.querySelector(".add-window")


function addWindow() {

	// window 
	const window = document.createElement("div")
	window.className = "window fade"
	
	// text span
	const textSpan = document.createElement("span")
	textSpan.className = "text"
	textSpan.innerText = "window text"

	// button
	const closeBtn = document.createElement("button")
	closeBtn.className = "close"
	closeBtn.innerHTML = `<i class="fa fa-times"></i>`

	const removeWindow = element => {
		element.innerHTML = ""
		// element.removeChild(closeBtn)
		element.className = "window fade"

		setTimeout(() => {
			element.className = "window disappear"
		}, 300)
	}

	closeBtn.addEventListener("click", e => removeWindow(window))

	window.appendChild(textSpan)
	window.appendChild(closeBtn)
	windowContainer.appendChild(window)
	setTimeout(() => {
		window.classList.remove("fade")
	}, 0)

}

addBtn.addEventListener("click", addWindow)
addBtn.click()