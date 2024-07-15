class CreateDiv {
    html: string;
    constructor(html: string) {
        this.html = html;
    }

    init() {
        console.log(this.html);
    }
}

const ProxySingletonCreateDiv = (() => {
    let instance: null | CreateDiv = null;
    return (html: string) => {
        if (!instance) {
            instance = new CreateDiv(html);
        }
        return instance;
    }
})();

const a = new ProxySingletonCreateDiv( "sven1" );
const b = new ProxySingletonCreateDiv( "sven2" );

console.log(a === b);

export {};
