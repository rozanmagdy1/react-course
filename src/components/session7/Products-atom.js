import React from 'react';
import {atom} from "recoil";

let ProductAtom = atom({
    key:"productAtom",
    default: {
        name: "Rozan",
        age: 22,
    }
})

export default ProductAtom;