const {PubSub} = require('./pubsub');

let myPubSub = new PubSub();
 let callback1 = function (data) {
   console.log('callback1: Trying to add:', data);
 }
 
 let callback2 = function (data) {
   console.log('callback2: Trying to add:', data);
 }
 
 const cb1Off = myPubSub.on('ADD', callback1);
 const cb2Off = myPubSub.on('ADD', callback2);
 
 //Question 1
 myPubSub.emit('ADD', 1); //cb1 and cb2 called
 
 //Question 2
 cb1Off();
 myPubSub.emit('ADD', 1); //cb2 called

