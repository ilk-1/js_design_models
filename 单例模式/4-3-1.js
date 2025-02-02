var CreateDiv = function ( html ) {
    this.html = html;
    this.init();
};

CreateDiv.prototype.init = function () {
    var div = Buffer.from("div");
    console.log(div);
}

var ProxySingletonCreateDiv = (function () {
    var instance;
    return function ( html ) {
        if ( !instance ) {
            instance = new CreateDiv( html );
        }
        return instance;
    };
})();

var a = new ProxySingletonCreateDiv( "sven1" );
var b = new ProxySingletonCreateDiv( "sven2" );

console.log(a === b);
