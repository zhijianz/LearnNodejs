# 简介

 这是一个NodeJs的学习项目，记录学习过程中的一些杂记和Demo程序

# 模块

> 在NodeJs中，各种功能被封装在对应的模块中，通过引用之后可以直接调用里面的功能。所以在NodeJs学习过程中，模块会占到一个很大的比重。

- http 处理网络请求相关的模块
- fs 文件操作相关的模块
- events 事件机制相关模块


# 单线程模型

NodeJs实现的是一种单线程模型，但是同时又会支持回调操作，这就明显是一个有冲突的地方。因为，对于一个单线程模型来说，事件的处理能做到的也只是按照一定的规则对事件进行排队然后再执行，但是这种处理方式在遇到IO这种耗时长的操作时一样会产生阻塞。所以NodeJs采用的应该是将IO事件交由宿主线程处理，剩下的非IO任务就在自身的线程事件队列中执行。

# 事件

- NodeJs的所有一步IO操作完成的时候都会发送一个事件到事件队列中，如文件读取、网络请求等等。

- NodeJs提供了基于观察者模式实现的`EventEmitter`基类作为事件监听行为的基础实现。

# Buffer

`JavaScript`只有字符串类型而没有二进制数据类型，所以在`Node.Js`中引入了`Buffer`对二进制数据类型进行扩充。`Buffer`本身是放置在V8堆内存之外的另外一块独立的内容，实质只是一个整形数组。所以`Buffer`提供的最后操作接口都是基于这种数据模型进行设计的。

# Steam

`Node.js`提供的`Steam`功能放置在`fs`模块中。输入输出流本身是`EventEmitter`的实例所以也提供了关于流操作的各种事件通知。其中，`ReadStream`提供了`data/end`事件对应于数据内容的可读和读取完成；`WriteStream`提供了`finish`通知数据写入完成；两者在发生错误的时候都会通知`error`事件。`ReadStream`提供`pipe`管道操作连通这个流操作函数。

# Rquire

`Node.js`提供封装好各种功能的模块通过`require`调用。这里对于模块的定义是和文件对应起来的，可以是`JavaScript`代码，`JSON`文件等等。可以通过`exports`开放文件中的某个属性或者函数，也可以通过`module.exports`将整个对象都开放出来。