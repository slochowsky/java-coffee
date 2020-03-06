const products = (productObject) => {
    return `
        <div class="single_product">
            <ul>
                <section class="name">Name: ${productObject.name}</section>
                <section class="beanType">Bean Type: ${productObject.beanType}</section>
                <section class="roastType">Roast Type: ${productObject.roastType}</section>
                <section class="price">Price: ${productObject.price}</section>
            </ul>
        </div>
    `
}

export default products