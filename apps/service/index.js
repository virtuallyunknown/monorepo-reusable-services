class Service {
    constructor() {
        this.name = Math.random();
    }

    logName() {
        console.log(`Service name: ${this.name}`);
    }
}

export const service = new Service();