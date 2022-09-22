export class Product{   //export:public ulaşılabiir her yerden demek
    id:number | undefined 
    name:string | undefined;
    price: number | undefined;
    categoryId: number | undefined;
    description: string | undefined;
    imageURL: string | undefined;
}


//Buradaki ts dosyası aslında classların
//interface falan her şeyin olduğu yer 