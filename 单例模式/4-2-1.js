var CreateDiv = (function() {
    var instance;

    var CreateDiv = function(html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    }

    CreateDiv.prototype.init = function() {
        var div = Buffer.from("div");
        div.innerHTML = this.html;
    }

    CreateDiv.prototype.getName = function() {
        console.log(this.html);
    }

    return CreateDiv;
})();

var a = new CreateDiv("sven1");
var b = new CreateDiv("sven2");

console.log(a === b);

a.getName();    // sven1
b.getName(); 

global.gc()

b = new CreateDiv("sven2");
a = new CreateDiv("sven2");
a.getName();    // sven1
b.getName();    // sven1
