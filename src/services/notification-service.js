// Notofication service notifies components whenever there is a change so that they can update accordingly 

export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";  // A global constant that can be accessed by everyfile

var observers = {}; // A array to store list of observers

// ----- Example ------
// var observers = {
//     "wishListChanged":[{observer:someComponent, callBack:someFunction},{observer:someOtherComponent, callBack:someOtherFunction}]
//     "userHasLoggedIn":[{observer:some....}]
// };

let instance = null;

class NotificationService {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
    }
    // A function that notifies an observer / component whenever there is an update
    // Explanation: Let say there is a change in breakfast menu in a hotel and the hotel wants to notify the
    // registered observers for the notification service 'notifName'. It takes the following arguments
    // notifName --> The name of the notitification service i.e. break fast service
    // data --> What is the notification about i.e. changed breakfast menu
    postNotification = (notifName,data) =>{
        let obs = observers[notifName]; // obs --> variable storing list of observers who registered for the notification 'notifName'
        for (var x=0;x<obs.length;x++){ // A loop to go through all the registered observers
            var obj = obs[x];
            obj.callBack(data);         // Call all the registered observer (using callback function e.g. the telephone number they provided) and let them know about the changed menu i.e. 'data'

        }
    }

    // A function that deregisters a component / Observer from the notification service
    // Explanation: This function will de-register a component / observer for a notitification service name
    // It takes the following arguments:
    // notifName --> The name of the notification service from which a components wants to get de-registered
    // observer --> The observer who wants to get de-registered
    removeObserver = (observer,notifName) => {

        var obs = observers[notifName]; // get list of observers for the notifocation service 'notifName'

        if (obs){ // If there are some observers present for the notifocation service 'notifName'
            for (var x=0; x<obs.length;x++) { // Loop through all the observers for the notifocation service 'notifName'
                if(observer === obs[x].observer){ // If the requested observer is present in the list
                    obs.splice(x,1);              // De-register the observer from the notifocation service 'notifName'
                    observers[notifName] = obs;   // return the updated observer list
                    break;
                }
            }
        }
    }


    // A function that registers a component / Observer for a notification service
    // Explanation: This function will register a component / observer for a notitification service name
    // It takes the following arguments:
    // notifName --> The name of the notification service a components wants to get registered for
    // observer --> The observer who wants to get registered
    // callback --> How the observer wants to get notified? This is generally a function
    // Example: Let say I am in a hotel and I want to register myself for the breakfast notification service
    // In this case:
    // notifName --> 'Breakfast service'
    // observer --> Sam
    // callback --> phone number or room number
    addObserver = (notifName,observer,callBack) => {
        let obs = observers[notifName]; // get list of observers for the notifocation service 'notifName'
        if(!obs){ // If there is no observer/component in the notification service 'notifName'
            observers[notifName] = []; // returns an empty array of observers for the notification service 'notifName'
        }
        let obj = {observer: observer, callBack:callBack};  // Creates an observer with the passed 'observer' and 'callBack'
        // adding observer/ component to the notification service 'notifName'
        observers[notifName].push(obj); // Pushes or registers the created observer to the notification service 'notifName'
    }
}

export default NotificationService
