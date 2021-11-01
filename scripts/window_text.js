let allWindows = document.querySelectorAll(".window")


addBtn.onclick = e => {
	allWindows = document.querySelectorAll(".window")

	for (let window of allWindows) {

		let text = ""

		window.onclick = e => {
			const textSpan = e.target.firstChild
			e.target.removeChild(textSpan)

			const input = document.createElement("input")
			input.className = "w-input"
			e.target.insertBefore(input, e.target.firstChild)
			
			input.onchange = e => {
				text = e.target.value
			}

			input.onkeydown = e => {
				if (e.keyCode == 13) {
					console.log(e.target)
					window.removeChild(input)
				}
			}

		}

	}

}

