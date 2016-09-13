export class Resolver {
    private onResolve: Function;
    private onReject: Function;
    private resolved: boolean;
    
    constructor() {
        this.resolved = false;
    }
    
    public set(resolve: Function, reject: Function) {
        this.onResolve = resolve;
        this.onReject = reject;
    }
    
    public resolve() {
        this.resolved = true;
        this.onResolve();
    }
    
    public reject() {
        this.resolved = true;
        this.onReject();
    }
    
    public isResolved() {
        return this.resolved;
    }
}