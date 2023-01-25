const cart = [];
const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //  Check if item exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //inc the quantity if exist or add it to cart
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: (x.qty++) } : x
                )
                
                    // return [
                    //     ...state,
                    //     {
                    //         ...product,
                    //         qty: product.qty++,
                    //     }
                    // ]
                
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DLTITEM":
            // return state = state.filter((x) => {
            //     return x.id !== action.payload.id
            // })
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                );
            }
            break;
        default:
            return state;
            break;
    }


}
export default handleCart;