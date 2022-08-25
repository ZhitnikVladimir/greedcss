const Jibi = document.querySelector('#Jibi');
const Dai = document.querySelector('#Dai');
// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('./js/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
		if (item.name == "Daim") {
			const productHTML = `<div class="${item.name}">
							<div class="card" data-id="${item.id}">
								<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
								<div class="card-body text-center">
									<h4 class="item-title">${item.title}</h4>
									<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small></p>
	
									<div class="details-wrapper">
	
										<!-- Счетчик -->
										<div class="items counter-wrapper">
											<div class="items__control" data-action="minus">-</div>
											<div class="items__current" data-counter>1</div>
											<div class="items__control" data-action="plus">+</div>
										</div>
										<!-- // Счетчик -->
	
										<div class="price">
											<div class="price__weight">${item.weight}г.</div>
											<div class="price__currency">${item.price} грн</div>
										</div>
									</div>
									
									<button data-cart type="button" class="btn btn-block btn-outline-warning">
										+ в корзину
									</button>
	
								</div>
							</div>
						</div>`;
			Dai.insertAdjacentHTML('beforeend', productHTML);
			}
		if (item.name == "Jibiar") {
        const productHTML = `<div class="${item.name}">
						<div class="card" data-id="${item.id}">
							<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт. в наявності</small></p>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}г.</div>
										<div class="price__currency">${item.price} грн</div>
									</div>
								</div>
								
								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`;
        Jibi.insertAdjacentHTML('beforeend', productHTML);
		}
		
    });

}
