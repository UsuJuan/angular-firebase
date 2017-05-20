export interface ServiceItinerary {
    description: string;
    time: string;
}

export interface ServiceImage {
    original_name: string;
    original?: string;
    content_type: string;
    thumbnail?: string;
    size: number;
    file: File;
}

export interface ServicePrice {
    price: number;
    currency: any;
}

export class Service {
    id: string;
    name: string;
    itinerary: ServiceItinerary[] = [];
    image?: ServiceImage;
    price: ServicePrice = {
        currency: 'PEN',
        price: null
    };

    constructor(data?: any) {
        Object.assign(this, data);
    }
}