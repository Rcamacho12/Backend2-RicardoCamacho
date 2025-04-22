import { ProductModel } from "./models/product.model.js";
import MongoDao from "./mongo.dao";

class ProductDao extends MongoDao {
    constructor(model) {
        super(model);
    }
}

export const productDao = new ProductDao(ProductModel);