const CreateDiv = (() => {
    let instance: CreateDiv;

    class CreateDiv {
        html: string = "";
        constructor(html: string) {
            if (instance) {
                return instance;
            }
            this.html = html;
            return instance = this;
        }

        getName() {
            console.log(this.html);
        }
    }

    return CreateDiv;
})();

let a: any = new CreateDiv("sven1");
let b: any = new CreateDiv("sven2");

console.log(a === b);
a.getName();    // sven1
b.getName();    // sven1

a = null;
b.getName();    // sven1

b = null;

setTimeout(() => {
    b = new CreateDiv("sven2");
    a = new CreateDiv("sven1");
    a.getName();    // sven1
    b.getName();    // sven1
}, 1000);

export {};
