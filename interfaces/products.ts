export interface IProduct {
    name: string;
    description: string;
    category: ICategory;
    subcategory: ISubcategory;

}

export type ICategory = 'iron' | 'steel';
export type ISubcategory = 'doors' | 'windows';