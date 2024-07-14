// 构造函数Singleton
var Singleton = function ( name ) {
    // 实例变量
    this.name = name;
}

// 类变量
// 在构造函数上添加变量
Singleton.instance = null;

// 实例方法
// Singleton原型对象上添加方法
(Singleton.prototype).getName = function () {
    console.log ( this.name );
}

// 类方法
// 在构造函数上添加方法
Singleton.getInstance = function ( name ) {
    if ( !this.instance ) {
        this.instance = new Singleton( name );
    }
    return this.instance;
}

// 访问类方法
var a = Singleton.getInstance( "sven1" );
var b = Singleton.getInstance( "sven2" );

console.log ( a === b );    // true

a.getName()
b.getName()
