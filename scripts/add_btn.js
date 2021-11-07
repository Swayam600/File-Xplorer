const windowContainer = document.querySelector(".window-container")
const addBtn = document.querySelector(".add-window")


function addWindow() {

	let windowText = ""

	// window 
	const window = document.createElement("div")
	window.className = "window fade"

	// inputField
	const inputField = document.createElement("input")
	inputField.className = "field hidden"
	
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
	
	window.appendChild(inputField)
	window.appendChild(textSpan)
	window.appendChild(closeBtn)
	windowContainer.appendChild(window)
	setTimeout(() => {
		window.classList.remove("fade")
	}, 0)

	textSpan.addEventListener("click", () => {
		inputField.classList.toggle("hidden")
		textSpan.classList.toggle("hidden")
	})

	inputField.addEventListener("change", () => {
		windowText = inputField.value
	})

	inputField.addEventListener("keydown", e => {
		if (e.keyCode == 13) {
			inputField.classList.toggle("hidden")
			textSpan.classList.toggle("hidden")
			textSpan.innerText = inputField.value
			console.log(window.children)
		}
	})

}

addBtn.addEventListener("click", addWindow)
addBtn.click()