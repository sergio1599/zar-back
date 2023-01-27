export interface IProduct {
    name: string;
    description: string;
    urlImage: string;
    category: ICategory;
    subcategory: ISubcategory;

}

export type ICategory = 'iron' | 'steel';
export type ISubcategory = 'doors' | 'windows';