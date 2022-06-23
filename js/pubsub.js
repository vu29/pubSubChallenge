class PubSub{
    constructor(){
        this.subscriptions = {};
    }

    on(subscriptionsName,callBack){
        
        if(!Array.isArray(this.subscriptions[subscriptionsName])){
            this.subscriptions[subscriptionsName] = [];
        }

        let subscriptionArray = this.subscriptions[subscriptionsName];
        subscriptionArray.push(callBack);

        return () => {
            subscriptionArray.splice(subscriptionArray.indexOf(callBack),1);
        }
    }

    emit(subscriptionName,callBackArg){
        let subscriptionArray = this.subscriptions[subscriptionName];
        if(!Array.isArray(subscriptionArray)){
            // TODO : THROW EXCEPTION
        }

        subscriptionArray.forEach(callBack => {
            callBack(callBackArg);
        });
    }

}

module.exports.PubSub = PubSub;