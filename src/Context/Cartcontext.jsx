/* eslint-disable no-unused-vars */
import { createContext } from "react";


export const CartContext = createContext({cart:[], updateCart: (product)=> {}})