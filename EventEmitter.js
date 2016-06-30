/**
 * EventEmitter 提供最基础监听控制操作，需要实现事件响应功能的模块一般都会直接继承这个类
 */

var events = require('events');
var mEmitter = new events.EventEmitter();

var EVENT_ERROR = 'error';
var EVENT_ADD_LISTENER = 'newListener';
var EVENT_REMOVE_LISTENER = 'removeListener'
var EVENT_CUSTOM = "customEvent";

mEmitter.on(EVENT_ERROR, function() {
  console.log('there is an error!');
});

mEmitter.on(EVENT_ADD_LISTENER, function() {
	console.log('add a new listener');
});

mEmitter.on(EVENT_REMOVE_LISTENER, function() {
	console.log('remove a listener from list');
});

var listener1 = function listener1() {
	console.log('invoke listener1');
}

var listener2 = function listener2() {
	console.log('invoke listener2');
}

function getListenerCount(){
	var listenerCount = events.EventEmitter.listenerCount(mEmitter, EVENT_CUSTOM);
	console.log(listenerCount + 'listeners on custom event');
}

getListenerCount();
mEmitter.on(EVENT_CUSTOM, listener1);
mEmitter.on(EVENT_CUSTOM, listener2);

mEmitter.emit(EVENT_CUSTOM);

mEmitter.removeListener(EVENT_CUSTOM, listener1);
getListenerCount();



