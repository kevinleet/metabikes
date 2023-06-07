console.log('script.js running successfully')

class Bike {
    constructor(_id, type, brand, model, price, color, weight, image, description) {
        this._id = _id;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.price = formatNumberWithDollar(price);
        this.color = color;
        this.weight = weight;
        this.image = image;
        this.description = description;
    }

    createDiv() {
        return `<div class="bike-grid-item">
        <img id="${this._id}" src="${this.image}"/>
        <br>
        <span>${this.brand}<br>${this.model}<br>Type: ${this.type}<br>Price: ${this.price}<span>
        </div>`
    }
}

class Accessory {
    constructor(_id, type, brand, item, price, img, description) {
        this._id = _id;
        this.type = type;
        this.brand = brand;
        this.item = item;
        this.price = formatNumberWithDollar(price);
        this.img = img;
        this.description = description;
    }

    createDiv() {
        return `<div class="accessory-grid-item">
        <img id="${this._id} "src="${this.img}"/>
        <br>
        <span>${this.brand}<br>${this.item}<br>Price: ${this.price}</span>
        </div>`
    }
}

function formatNumberWithDollar(price) {
    let formatting_options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
     }
     let dollarString = new Intl.NumberFormat("en-US", formatting_options);
     return dollarString.format(price)
}


$('#nav-home-btn').on('click', function () {
    console.log('button click')
    $('.home-container').css("display", "flex")
    $('.bikes-container, .accessories-container, .admin-container, .cart-container').css("display", "none")
})

$('#nav-bikes-btn').on('click', async function () {
    $('.bikes-container').empty()

    $('.bikes-container').css("display", "grid")
    $('.accessories-container, .home-container, .admin-container, .cart-container').css("display", "none")

    let response = await axios.get('/api/bikes')
    let data = response.data
    for (const bike of data) {
        const { _id, type, brand, model, price, color, weight, image, description } = bike
        const newBike = new Bike(_id, type, brand, model, price, color, weight, image, description)
        $('.bikes-container').append(newBike.createDiv())
    }
})

$('#nav-accessories-btn').on('click', async function () {
    $('.accessories-container').empty()

    $('.accessories-container').css("display", "grid")
    $('.home-container, .bikes-container, .admin-container, .cart-container').css("display", "none")

    let response = await axios.get('/api/accessories')
    let data = response.data
    for (const accessory of data) {
        const { _id, type, brand, item, price, img, description } = accessory
        const newAccessory = new Accessory(_id, type, brand, item, price, img, description)
        $('.accessories-container').append(newAccessory.createDiv())
    }

})

$('#admin-login-btn').on('click', function () {


    $('.admin-container').css("display", "flex")
    $('.home-container, .bikes-container, .accessories-container, .cart-container').css("display", "none")

})

$('#cart-img').on('click', function() {
    $('.cart-container').css("display", "flex")
    $('.admin-container, .home-container, .bikes-container, .accessories-container').css("display", "none")
})