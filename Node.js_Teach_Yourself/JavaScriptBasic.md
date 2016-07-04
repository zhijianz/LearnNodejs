# 数据类型

## 支持的数据类型

`JavaScript`支持一下的几种数据类型

- String

字符串数据类型，数据的内容可以是单引号或者双引号之间的任何文本内容。

```JavaScript
  var str = new String;
```

- Number

`JavaScript`和一些高级编程语言相比，只支持一种数字类型参数，这种数字类型参数可以包含小数点。

```JavaScript
  var num = new Number;
```

- Boolean

布尔值只有`true/false`两种取值，不能支持整数的转换。

```JavaScript
  var bool = new Boolean;
```

- Array

数组类型支持的数据比较松散，在声明创建了数据对象之后，可以在数组中插入不同类型的数据。

```JavaScript
  var arr = new Array();
  arr[0] = 1;
  arr[1] = 'Array Test';
  typeof arr[0] // output number
  typeof arr[1] // output string
```

- Object

对象类型的属性通过`JSON`的方式进行描述，属性访问的方式有下面代码中展示的两种不同方式

```JavaScript
  var person = {name:'name1', age:12, id:123};
  var name = person.name;
  var name1 = person['name'];
```

## 动态数据类型

`JavaScript`使用的是动态数据类型，意思是在声明一个变量的时候并不会去决定这个变量的数据类型，而是在赋值的时候才能够确定变量的数据类型。这种机制就会出现同一个变量在不同的时期变成不同类型的数据。

```JavaScript
  var x= 1;
  typeof x; // output number
  x = 'test';
  typeof x; // output string
```
