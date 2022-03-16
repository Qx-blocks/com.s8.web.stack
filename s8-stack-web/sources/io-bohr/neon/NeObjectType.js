import { ByteInflow } from "../../io-bytes/ByteInflow";

import { Types } from "../io-bohr/BOHR_Protocol";



class NeObjectType {

    constructor(name) {
        this.name = name;

        this.fields = new Array(4);
    }




    /**
     * 
     * @param {ByteInflow} inflow 
     */
    declareField(inflow){
        let name = inflow.getStringUTF8();
        let code = inflow.getUInt8();


    }



    appendField(code, field){

        if(code >= this.fields.length) {
            let n = this.fields.length, m=2*n;
            
            // extend while code is not within range
            while(code >= m){ m = 2*m; }

            let extendedFields = new Array(2*n);

            for(let i = 0; i<n; i++){ extendedFields[i] = this.fields[i]; }
            this.fields = extendedFields;
           
        }

        this.fields[code] = field;
    }

}



