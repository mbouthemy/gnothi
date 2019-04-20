export class Asset {
    constructor(public name: string, public value: number,
                public currency: string,
                public dateLimit: Date, public owner: string) {
    }
}
