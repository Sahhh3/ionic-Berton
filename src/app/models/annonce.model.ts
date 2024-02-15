export class Annonce {
    id?: string;
    seller: string;
    title: string;
    city: string;
    price: number;
    sold: boolean;
    pictureLink: string;
    description: string;

    constructor() {
        this.seller = '';
        this.title = '';
        this.city = '';
        this.price = 0;
        this.sold = false;
        this.pictureLink = '';
        this.description = '';
    }
}
