export type ItemColor = 'blue' | 'green' | 'gray';

export interface Product {
  id?: string;
  name?: string;
  price?: number;
  currency?: string;
  colors?: ItemColor[];
  discount?:number;
  description?:string;
}