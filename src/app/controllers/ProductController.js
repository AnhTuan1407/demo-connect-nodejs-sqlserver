const { getAllProducts } = require('../services/products');

class ProductController {

    //[GET] /products/
    async showAll(req, res) {
        const result = await getAllProducts()
        res.json(result);
    }
}

module.exports = new ProductController();