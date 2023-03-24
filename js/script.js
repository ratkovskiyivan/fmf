const directionsItems = document.querySelectorAll('.directions-item')

directionsItems.forEach(directionsItem => {
	directionsItem.addEventListener('click', event => {
		directionsItem.classList.toggle('show')
		const item = event.target.closest('.directions-item')
		const itemHeader = item.querySelector('.directions-item_header')
		const itemBody = item.querySelector('.directions-item_body')
		const scrollHeight = itemBody.scrollHeight
		if (directionsItem.classList.contains('show')) {
			item.removeChild(itemHeader)
			itemBody.style.maxHeight = `${scrollHeight + 100}px`
		} else {
			itemBody.style.maxHeight = 0
			setTimeout(() => {
				const directionsItemHeaderEl = document.createElement('div')
				directionsItemHeaderEl.classList.add('directions-item_header')
				directionsItemHeaderEl.innerHTML = `
					<span class="directions-item_header-number">${itemBody.querySelector('.directions-item_body-number').textContent}</span>
					<h5 class="directions-item_header-title">${itemBody.querySelector('.directions-item_body-title').textContent}</h5>
					<div class="arrow">
						<i class='bx bx-chevron-down-circle'></i>
					</div>`
				directionsItemHeaderEl.style.animation = 'op 1.1s ease'
				item.prepend(directionsItemHeaderEl)
			}, 100)
		}
	})
})