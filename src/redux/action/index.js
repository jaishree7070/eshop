export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
  }
//delete items from cart
    export const dltCart=(product)=>{
        return{
            type:"DLTITEM",
            payload:product
        }
      }