export class Purchase{
  private id: string;
  private userId: string;
  private productId: string;
  private quantity: number;
  private totalPrice: number;

  constructor(id:string, userId:string, productId:string, quantity:number, totalPrice:number){
    this.id = id;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }
  public getAllValues():(string | number)[] {
    return [this.id,this.userId,this.productId,this.quantity,this.totalPrice]
  }
  public getId():string{
    return this.id
  };
  public getUserId():string{
    return this.userId
  };
  public getProductId():string{
    return this.productId
  };
  public getQuant():number{
    return this.quantity
  };
  public getTotalPrice():number{
    return this.totalPrice
  }


}