import React,{Component} from "react";
import './wishlist.css';
import ProductCondensed from "../product-condensed/product-condensed";
import NotificationService, {NOTIF_WISHLIST_CHANGED} from "../services/notification-service";

let ns = new NotificationService()  // Creating an instance of notification service


class WishList extends Component { // Creating a class product which extends the Component class created by React developers
    
    constructor(props){
        super(props)

        this.state = {wishList:[]}
        //Bind functions
        this.createWishList = this.createWishList.bind(this)
        this.onWishListChanged = this.onWishListChanged.bind(this) 
    }

    componentDidMount() { // a react component and used When a component is mounting / about to load
        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged)
    }
    componentWillUnmount() {
        ns.removeObserver(this,NOTIF_WISHLIST_CHANGED)
    }

    onWishListChanged(newWishList){
        this.setState({wishList:newWishList})
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id}></ProductCondensed> // Note here 'product' and 'key' are the properties i.e. props of the component ProductCondensed
        )
        return (list);
    }
    
    render() { 
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        )

    }
}

export default WishList; 