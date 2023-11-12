import React,{Component} from "react";
import './product.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_WISHLIST_CHANGED} from "../services/notification-service";

let ds = new DataService()
let ns = new NotificationService() 


class Product extends Component { 
    constructor(props){
        super(props);
        this.state = {isOnWishList: ds.itemOnWishList()}  // Check if a product is already on a wishlist
        // Bind functions
        this.onButtonCLicked = this.onButtonCLicked.bind(this)
        this.onWishListChanged = this.onWishListChanged.bind(this)
    }

    componentDidMount() { // a react built-incomponent and used when a component is mounting / about to load
        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged)
    }
    componentWillUnmount() { // a react built-incomponent and used when a component is unmounting / about to unload
        ns.removeObserver(this,NOTIF_WISHLIST_CHANGED)
    }

    onWishListChanged(){ // updates the state of the wishlist by checking if an item is already present on the wishlist or not
        this.setState({isOnWishList: ds.itemOnWishList(this.props.product)})
    }

    onButtonCLicked = () => { // An even which decides what to do when a button is pressed
        
        if(this.state.isOnWishList) { // If a product is already on the wishlist then remove
            ds.removeWishListItem(this.props.product)
        }else {
            ds.addWishListItem(this.props.product) //If a product is not on the wishlist then add
        }
    }
    
    
    
    render() { 
        var btnClass
        // conditional styling
        if (this.state.isOnWishList) { // if the product is already on the wishlist
            btnClass = "btn mb-2 btn-danger"
        }else {
            btnClass = "btn mb-2 btn-success"
        }
        return(
            <div className="shadow card product">
                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    <p className="card-text">Price: ${this.props.product.price}</p>
                    <a href="#" onClick={()=> this.onButtonCLicked()} className={btnClass}>{this.state.isOnWishList ? "Remove from wishlist" : "Add to wishlist"}</a>  
                </div>
            </div>
        )

    }
}

export default Product; // Exporting the created component so that it can be imported in our App.js file