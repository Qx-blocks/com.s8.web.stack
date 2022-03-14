

import { ByteOutflow } from '../helium/ByteOutflow';
import { BOHR_Encoding } from './BOHR_Protocol';

/**
 * 
 */
export class NeOutflow extends ByteOutflow {

    constructor(arraybuffer) {
        super(arraybuffer);
    }

    publishByte(value) {
        this.putUInt8(BOHR_Encoding.BYTE);
        this.putByte(value);
    }



	publishArrayLength(length) {
		if(length > 0) {
			if(length <= 0xff) {
				this.putUInt8(BOHR_Encoding.UINT8);
				this.putUInt8(length);
			}
			else if(length <= 0xffff) {
				this.putUInt8(BOHR_Encoding.UINT16);
				this.putUInt16(length);
			}
			else {
				this.putUInt8(BOHR_Encoding.UINT31);
				this.putUInt31(length);
			}
		}
		else if(length == 0){
			this.putUInt8(BOHR_Encoding.ZERO_INT);
		}
		else { // if(value < 0)
			this.putUInt8(BOHR_Encoding.MINUS_ONE_INT);
		}
	}



    publishUInt8(value) {
        this.putUint8(BOHR_Encoding.UINT8);
        this.putUint8(value);
    }






	publishBoolean(value) {
		this.putUInt8(value ? BOHR_Encoding.TRUE_BOOL8 : BOHR_Encoding.FALSE_BOOL8);
	}


    publishInteger(value) {
		if(value != 0) {
			if(value > 0) {
				if(value <= 0xff) {
					this.putUInt8(BOHR_Encoding.UINT8);
					this.putUInt8(value);
				}
				else if(value <= 0xffff) {
					this.putUInt8(BOHR_Encoding.UINT16);
					this.putUInt16(value);
				}
				else {
					this.putUInt8(BOHR_Encoding.UINT31);
					this.putUInt31(value);
				}
			}
			else { // negative
				if(value > -0xffff) {
					this.putUInt8(BOHR_Encoding.INT16);
					this.putInt16(value);
				}
				else {
					this.putUInt8(BOHR_Encoding.INT32);
					this.putInt32(value);
				}
			}
		}
		else {
			this.putUInt8(BOHR_Encoding.ZERO_INT);
		}
	}


    publishIntegerArray(value) {
		this.putUInt8(BOHR_Encoding.INTEGER_ARRAY);
		if(value!=null) {
			let length = value.length;
			this.publishArrayLength(length);
			for(let i=0; i<length; i++) { this.publishInteger(value[i]); }
		}
		else {
			this.putUInt8(BOHR_Encoding.MINUS_ONE_INT);
		}
	}


	publishFloat(value) {
		if(value != 0.00) {
			this.putUInt8(BOHR_Encoding.FLOAT32);
			this.putFloat32(value);	
		}
		else {
			this.putUInt8(BOHR_Encoding.ZERO_FLOAT);
		}
	}


    publishFloatArray(value) {
		this.putUInt8(BOHR_Encoding.FLOAT_ARRAY);

		if(value!=null) {
			let length = value.length;
			this.publishArrayLength(length);
			for(let i=0; i<length; i++) { this.publishFloat(value[i]); }
		}
		else {
			this.putUInt8(BOHR_Encoding.MINUS_ONE_INT);
		}
	}



    publishDouble(value) {
		if(value != 0.00) {
			this.putUInt8(BOHR_Encoding.FLOAT64);
			this.putFloat64(value);
		}
		else {
			this.putUInt8(BOHR_Encoding.ZERO_FLOAT);
		}
	}


	publishDoubleArray(value) {
		this.putUInt8(BOHR_Encoding.DOUBLE_ARRAY);
		if(value!=null) {
			let length = value.length;
			this.publishArrayLength(length);
			for(let i=0; i<length; i++) { this.publishDouble(value[i]); }
		}
		else {
			this.putUInt8(BOHR_Encoding.MINUS_ONE_INT);
		}
	}


    publishL8StringASCII(value) {
        this.putUInt8(BOHR_Encoding.L8_STRING_ASCII);
        this.putL8StringASCII(value);
    }


    publishL32StringUTF8(value) {
        this.putUInt8(BOHR_Encoding.L32_STRING_UTF8);
        this.putL32StringUTF8(value);
    }


    publishLString(value) {
        this.putUInt8(BOHR_Encoding.L32_STRING_UTF8);
        this.putL32StringUTF8(value);
    }


	publishStringArray(value) {
        this.putUInt8(BOHR_Encoding.STRING_ARRAY);
		if(value!=null) {
			let length = value.length;
            this.publishArrayLength(length);
			for(let i=0; i<length; i++) { this.publishString(value[i]); }
		}
		else {
            this.putUInt8(BOHR_Encoding.MINUS_ONE_INT);
		}
	}    


    publishId(value){
		if(value != "NULL"){
			// publish header
			let length = value.length/2;
            switch(length){
            case 1: this.putUInt8(BOHR_Encoding.ID_UINT8); break;
            case 2: this.putUInt8(BOHR_Encoding.ID_UINT16); break;
            case 3: this.putUInt8(BOHR_Encoding.ID_UINT24); break;
            case 4: this.putUInt8(BOHR_Encoding.ID_UINT32); break;
            case 5: this.putUInt8(BOHR_Encoding.ID_UINT40); break;
            case 6: this.putUInt8(BOHR_Encoding.ID_UINT48); break;
            case 7: this.putUInt8(BOHR_Encoding.ID_UINT56); break;
            case 8: this.putUInt8(BOHR_Encoding.ID_UINT63); break;
            }
			for (let i = 0; i < length; i++) {
				this.view.setUint8(this.offset, parseInt(value.substring(i*2, i*2 + 2), 16));
				this.offset += 1;
			}
		}
		else{
			this.putUInt8(BOHR_Encoding.NULL_ID);
		}
	}



	publishIdArray(value) {
		this.putUInt8(BOHR_Encoding.ID_ARRAY);
		if(value!=null) {
			let length = value.length;
			this.publishArrayLength(length);
			for(let i=0; i<length; i++) { this.publishId(value[i]); }
		}
		else {
			this.putUInt8(BOHR_Encoding.MINUS_ONE_INT);
		}
	}


}

