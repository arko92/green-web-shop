// This service does the following
// 1. Adds an item to the wishList & notifies the components
// 2. Removes an item from the wishList & notifies the components
// 3. Check if an item is already present on the wishlist

import NotificationService, {NOTIF_WISHLIST_CHANGED} from "./notification-service"

let ns = new NotificationService(); // create an instance of the notification service

let instance = null
var wishList = []
class DataService {
    constructor(){
        if (!instance){
            instance = this
        }
    
        return instance
    }

    // A function to add items to the wishList when the button 'Add to wishlist' is pressed
    addWishListItem = item => {
        wishList.push(item)
        ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList); // Notifies the components that the wishlish has been updated
    }
    // A function to check if an item is already on the wishList 
    itemOnWishList = item => {
        for (var x = 0; x<wishList.length;x++) { // loops through all the items on the wishlist
            if (wishList[x]._id === item._id){ // if the item is already present on the wishlist
                return true
            }
        }
        return false
    }
    // A function to remove  items from the wishList 
    removeWishListItem = item => {
        for (var x=0;x<wishList.length;x++) { // loops through all the items on the wishlist
            if(wishList[x]._id===item._id){ // if the item is already present on the wishlist
                wishList.splice(x,1)        // remove the item from the wishlist
                ns.postNotification(NOTIF_WISHLIST_CHANGED,wishList); // Notifies the components that the wishlish has been updated
                break
            }
        }
    }

}

export default DataService


