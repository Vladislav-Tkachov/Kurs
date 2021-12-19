
interface Entity {
    id: string;
}

export interface CardProduct extends Entity  {
    title: string;
    description: string;
    type: TypeCard;
    images: Image[];
}

export interface Image extends Entity  {
    name: string;
    path: string;
    main: boolean;
}

export enum TypeCard {
    Kitchens,
    Hallways,
    Wardrobes,
    SerialFurnitures,
    OfficeFurnitures,
}