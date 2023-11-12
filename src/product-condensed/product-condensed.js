import React,{Component} from "react";
import './product-condensed.css';
import DataService from "../services/data-service";

// This component is to condense the products (i.e. without images in this case) so that they can be listed on the wishlist

let ds = new DataService()
// ----- Creating first component using react and Bootstrap

class ProductCondensed extends Component { // Creating a class product which extends the Component class created by React developers
    constructor(props) {
        super(props)

        //Bind
        this.removeProduct = this.removeProduct.bind(this)
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product)
    }
    
    
    render() { 
        return(
            <li className="list-group-item text-center d-inline-flex pc-condensed">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                <p>{this.props.product.title}  | <b>${this.props.product.price}</b></p>
            </li>
        )

    }
}

export default ProductCondensed; // Exporting the created component so that it can be imported in our App.js file