const CreateDiv = (() => {
    let instance: CreateDiv | null = null;

    class CreateDiv {
        html: string = "";
        constructor(html: string) {
            if (instance) {
                return instance;
            }
            this.html = html;
            instance = this;
            return instance;
        }

        getName() {
            console.log(this.html);
        }
        dispose() {
            instance = null; 
        }
    }

    return CreateDiv;
})();

let a: any = new CreateDiv("sven1");
let b: any = new CreateDiv("sven2");

console.log(a === b);
a.getName();    // sven1
b.getName();    // sven1

a.dispose();
b.dispose();

a = null;
b = null;

setTimeout(() => {
    b = new CreateDiv("sven2");
    a = new CreateDiv("sven1");
    a.getName();    // sven1
    b.getName();    // sven1
}, 1000);

export {};
