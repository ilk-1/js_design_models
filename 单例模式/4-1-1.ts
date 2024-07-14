class Singleton {

    name: string;
    constructor (name: string) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }

    static instance: Singleton;
    static getInstance(name: string) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name);
        }
        return Singleton.instance;
    }
}

// 类方法为类变量复制
var a = Singleton.getInstance( "sven1" );
// 类变量已存在
var b = Singleton.getInstance( "sven2" );

console.log ( a === b );    // true

a.getName();    // sven1
b.getName();    // sven1
