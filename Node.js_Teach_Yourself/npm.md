# 简介

npm 的全程是 Node Package Manager，Node包管理器。在npm中可以下载使用别人已经写好上传的Node包或者完整的应用程序，同时也可以将自己实现的Node包上传到npm中供其他开发者下载使用。npm遵循开源协议，所以获得包可以进行功能的修改增加然后进行分发。

# npm search

在使用npm的时候，可以在 [npm search](https://www.npmjs.org/) 中进行搜索；同时，也可以使用`npm search key-word`进行搜索，但是使用这种搜索方式在首次查找的时候为了创建本地索引会有一个很长时间的延时。

# npm install

为了可以使用npm中提供的Node包，需要使用`node install`命令安装对应的包。安装的方式有本地安装和全局安装两种。

- 本地安装

`node install package-name`命令会进行Node包的本地安装。这个过程会在当前目录下（一般是在当前项目目录）创建一个`node_modules`目录并将Node包安装到这个目录中。在整个安装操作完成之后就可以在该项目中使用这个Node包，但是因为本地安装的原因，所以适用范围也仅仅是当前项目。

- 全局安装

`node install -g package-name`命令会执行一个全局安装。全局安装会把对应的Node包安装到特定的目录下，安装完成之后可以全局使用而不仅限于当前项目。安装路径的修改可以找到'安装路径/node_modules/npm/npmrc'文件将里面对应的参数改掉即可。

- package.json

对于一个比较大的项目来说，依赖管理的工具肯定是需要的。从NPM上安装了各种不同的包之后怎么样去进行比较有效的管理就变成一个比较紧迫的问题。Nodejs中针对于项目提供了一个`package.json`的文件来管理依赖的各种包和对应的版本，在`package.json`创建完成之后直接在该目录下执行`npm install`命令就可以安装完所有声明的对应版本的包。下面是个最简单的`package.json`文件

```json
  {
    "name":"example_02",
    "version":"0.0.1",
    "dependencies":{
      "underscore":"1.8.3"
    }
  }
```

其中`name/version`描述当前项目的对应参数，`dependencies`描述该项目依赖的包。关于`package.json`后续在继续详细学习。
