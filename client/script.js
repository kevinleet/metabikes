console.log('script.js running successfully')

class Bike {
    constructor(_id, type, brand, model, price, color, weight, img, description) {
        this._id = _id;
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.price = formatNumberWithDollar(price);
        this.color = color;
        this.weight = weight;
        this.img = img;
        this.description = description;
    }

    createDiv() {
        return `<div class="bike-grid-item">
        <img id="${this._id}" src="${this.img}"/>
        <br>
        <span>${this.brand} ${this.model}<br>${this.color}<br>${this.type} Bike, ${this.weight} lbs.<br>Price: ${this.price}<span>
        </div>`
    }

    createProductPage() {
        return `
        <img src="${this.img}"/>
        <span>
        <h1>${this.brand}<h1>
        <h2>${this.model}</h2>
        <h4>Type: ${this.type}</h4>
        <h4>Color: ${this.color}</h4>
        <h4>Weight: ${this.weight}lbs</h4>
        <br>
        <h2>Price: ${this.price}</h2>
        <button class="add-cart-btn" id="${this._id}">ADD TO CART</button>
        <br>
        <h4>${this.description}</h4>
        </span>`
    }

    createCartItem(quantity, cartItemID) {
        return `
        <div class="cart-item">
        <img src="${this.img}"/>
        <span>
            ${this.brand} <br>
            ${this.model} <br> <br>
            Quantity: ${quantity} <br> <br>
            ${this.price}
        </span>
        <button class="remove-from-cart-btn"id="${cartItemID}">Remove from Cart</button>
        </div>
        `
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

    createProductPage() {
        return `
        <img src="${this.img}"/>
        <span>
        <h1>${this.brand}<h1>
        <h2>${this.item}</h2>
        <br>
        <h2>Price: ${this.price}</h2>
        <button class="add-cart-btn" id="${this._id}">ADD TO CART</button>
        <br>
        <h4>${this.description}</h4>
        </span>`
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
    $('.container-wrapper').children().css("display", "none")
    $('.home-container').css("display", "flex")
})

$('#nav-bikes-btn').on('click', async function () {
    $('.bikes-container').empty()
    $('.container-wrapper').children().css("display", "none")
    $('.bikes-container').css("display", "grid")

    let response = await axios.get('/api/bikes')
    let data = response.data
    for (const bike of data) {
        const { _id, type, brand, model, price, color, weight, img, description } = bike
        const newBike = new Bike(_id, type, brand, model, price, color, weight, img, description)
        $('.bikes-container').append(newBike.createDiv())
    }
})

$('.bikes-container').on('click', 'img', async function() {
    $('.bike-product-container').empty()
    $('.container-wrapper').children().css("display", "none")
    $('.bike-product-container').css("display", "flex")
    let id = $(this).prop("id")
    const response = await axios.get(`/api/bikes/${id}`)
    let data = response.data
    const { _id, type, brand, model, price, color, weight, img, description } = data
    let bike = new Bike(_id, type, brand, model, price, color, weight, img, description)
    $('.bike-product-container').append(bike.createProductPage())
    $('.add-cart-btn').on('click', async function() {
        let id = $(this).prop("id")
        let searchCartResult = await axios.get(`/api/cartItems/bicycleID/${id}`)
        if (searchCartResult.data[0]?.quantity > 0) {
            let cartItemID = searchCartResult.data[0]._id
            let newQuantity = searchCartResult.data[0].quantity + 1
            await axios.put(`/api/cartItems/${cartItemID}`, {
                quantity: newQuantity
            })
        } else {
            await axios.post('/api/cartItems', {
                bicycleID: id,
                quantity: 1
            })
        }
        $('.add-cart-btn').text("ADDED TO CART").css("background-color", "#2a4f9a").attr("disabled", "true")
        setTimeout(() => {
            $('.add-cart-btn').text("ADD TO CART").css("background-color", "rgb(27, 177, 27)").removeAttr("disabled")
        }, 2000);
    })
})

$('#nav-accessories-btn').on('click', async function () {
    $('.accessories-container').empty()
    $('.container-wrapper').children().css("display", "none")
    $('.accessories-container').css("display", "grid")
    let response = await axios.get('/api/accessories')
    let data = response.data
    for (const accessory of data) {
        const { _id, type, brand, item, price, img, description } = accessory
        const newAccessory = new Accessory(_id, type, brand, item, price, img, description)
        $('.accessories-container').append(newAccessory.createDiv())
    }
})

$('.accessories-container').on('click', 'img', async function() {
    $('.accessory-product-container').empty()
    $('.container-wrapper').children().css("display", "none")
    $('.accessory-product-container').css("display", "flex")
    let id = $(this).prop("id")
    const response = await axios.get(`/api/accessories/${id}`)
    let data = response.data
    console.log(data)
    const { _id, type, brand, item, price, img, description } = data
    let accessory = new Accessory(_id, type, brand, item, price, img, description)
    $('.accessory-product-container').append(accessory.createProductPage())
    $('.add-cart-btn').on('click', function() {
        let id = $(this).prop("id")
    })
})

$('#cart-img').on('click', async function generateCart() {
    $('.container-wrapper').children().css("display", "none")
    $('.cart-container').css("display", "flex")
    
    $('.cart-contents').empty()
    let response = await axios.get('/api/cartItems')
    let data = response.data
    if (data.length == 0) {
        $('.cart-contents').append(`<h3>Your cart is empty!</h3>`)
    }
    for (const item of data) {
        if (item.bicycleID) {
            let quantity = item.quantity
            let cartItemID = item._id
            const { _id, type, brand, model, price, color, weight, img, description } = item.bicycleID
            const bikeCartItem = new Bike(_id, type, brand, model, price, color, weight, img, description)
            $('.cart-contents').append(bikeCartItem.createCartItem(quantity, cartItemID))
            $(`#${cartItemID}`).on('click', async function() {
                console.log(`removing ${cartItemID} from cart`)
                await axios.delete(`/api/cartItems/${cartItemID}`)
                generateCart()
            })
        }
    }
    // console.log(response)

    // const response = await axios.get('/api/cart')
    // let data = response.data
    // for (const item of data) {
    //     const {_id}
    // }

})

$('#nav-contact-btn').on('click', function() {
    $('.container-wrapper').children().css("display", "none")
    $('.contact-container').css("display", "flex")
})

$('#contact-submit-btn').on('click', async function() {
    let name = $('#input-name').val()
    let email = $('#input-email').val()
    let message = $('#input-message').val()
    if (name && email && message) {
        axios.post('/api/comments', {
            name: name,
            email: email,
            description: message
        })
        $('#please-fill').css("display", "none")
        $('.input-div').children().val("")
        alert('Thank you for submitting your messsage.')
    } else {
        $('#please-fill').css("display", "block")
    }
})

$('#admin-login-btn').on('click', function() {
    $('.container-wrapper').children().css("display", "none")
    $('.admin-container').css("display", "flex")
    $('.login-form').css("display", "flex")
    $('.admin-homepage').css("display", "none")
    $('#invalid-login').css("display", "none")


    $('#nav-manage-bikes').on('click', function() {
        $('.admin-content').empty()
    })

    $('#nav-manage-accessories').on('click', function() {
        $('.admin-content').empty()
    })

    $('#admin-login-submit').off()
    $('#admin-username-input').val("")
    $('#admin-password-input').val("")
    $('#admin-login-submit').on('click', async function() {
        let username = $('#admin-username-input').val()
        let password = $('#admin-password-input').val()
        // if (username == 'admin' && password == 'admin') {
        if (true) {
            $('.login-form').css("display", "none")
            $('.admin-homepage').css("display", "flex")
            $('.admin-content').empty()
            $('#nav-read-comments').off()
            $('#nav-read-comments').on('click', async function() {
                $('.admin-content').empty()
                const response = await axios.get('/api/comments')
                let data = response.data
                for (const comment of data) {
                    const { name, email, description } = comment
                    $('.admin-content').append(`
                    <div class="comment-item">
                        <p>Name: ${name}<p>
                        
                        <p>Email: ${email}</p>
                        
                        <p>Message: ${description}</p>
                    </div>
                    <br>
                    `)
                }
            })
        } else {
            $('#invalid-login').css("display", "block")
        }
    })





})