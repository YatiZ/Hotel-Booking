type CoverImage = {
    url: string
}

export type Image = {
    _key: string,
    url:string
}

type Amenity = {
    _key: string,
    amentiy: string,
    icon:string
}
type Slug = {
    _type:string,
    current: string
}

export type Room = {
    _id: string,
    coverImage: CoverImage,
    description: string,
    dimension: string,
    price: number,
    discount: number,
    images: Image[],
    isBooked: boolean,
    isFeatured: boolean,
    name: string,
    numberOfBeds: number,
    amenity: Amenity[],
    slug:Slug;
    specialNote: string,
    type:string
}