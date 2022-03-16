

import { ByteInflow } from "../../io-bytes/ByteInflow";
import { BOHR_Types } from "../atom/BOHR_Protocol";



class NeField {


    /**
     * 
     * @param {*} name 
     * @param {Function} setter 
     */
    constructor() {

    }


}


NeField.build = function (inflow) {
    switch (inflow.getUInt8()) {

        case BOHR_Types.ARRAY : return NeField.buildArray(inflow);

        case BOHR_Types.SERIAL : throw "Unsupported serial";

        case BOHR_Types.BOOL8 : return new Bool8NeField();

        case BOHR_Types.UINT8 : return new UInt8NeField();
        case BOHR_Types.UINT16 : return new UInt16NeField();
        case BOHR_Types.UINT32 : return new UInt32NeField();
        case BOHR_Types.UINT64 : return new UInt64NeField();

        case BOHR_Types.INT8 : return new Int8NeField();
        case BOHR_Types.INT16 : return new Int16NeField();
        case BOHR_Types.INT32 : return new Int32NeField();
        case BOHR_Types.INT64 : return new Int64NeField();

        case BOHR_Types.FLOAT32: return new Float32NeField();
        case BOHR_Types.FLOAT64: return new Float64NeField();

        case BOHR_Types.STRING_UTF8: return new StringUTF8NeField();
        case BOHR_Types.S8OBJECT: return new S8ObjectNeField();
    }
}

NeField.buildArray = function (inflow) {
    switch (inflow.getUInt8()) {

        case BOHR_Types.BOOL8: return new Bool8ArrayNeField();

        case BOHR_Types.UINT8 : return new UInt8ArrayNeField();
        case BOHR_Types.UINT16 : return new UInt16ArrayNeField();
        case BOHR_Types.UINT32 : return new UInt32ArrayNeField();
        case BOHR_Types.UINT64 : return new UInt64ArrayNeField();

        case BOHR_Types.INT8 : return new Int8ArrayNeField();
        case BOHR_Types.INT16 : return new Int16ArrayNeField();
        case BOHR_Types.INT32 : return new Int32ArrayNeField();
        case BOHR_Types.INT64 : return new Int64ArrayNeField();
      
        case BOHR_Types.FLOAT32: return new Float32ArrayNeField();
        case BOHR_Types.FLOAT64: return new Float64ArrayNeField();

        case BOHR_Types.STRING_UTF8: return new StringUTF8ArrayNeField();
        case BOHR_Types.S8OBJECT: return new S8ObjectArrayNeField();
    }
}




class Bool8NeField extends NeField {

    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getBool8());
    }
}



class Bool8ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getBool8(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}



class UInt8NeField extends NeField {

    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getUInt8());
    }
}


class UInt8ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getUInt8(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class UInt16NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getUInt16());
    }
}


class UInt16ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getUInt16(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class UInt32NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getUInt32());
    }
}


class UInt32ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getUInt32(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class UInt64NeField extends NeField {

    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getUInt64());
    }
}


class UInt64ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getUInt64(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class Int8NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getInt8());
    }
}



class Int8ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getInt8(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class Int16NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getInt16());
    }
}


class Int16ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getInt16(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class Int32NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getInt32());
    }
}


class Int32ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getInt32(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class Int64NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getInt64());
    }
}


class Int64ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getInt64(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}




class Float32NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getFloat32());
    }
}


class Float32ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getFloat32(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class Float64NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getFloat64());
    }
}




class Float64ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getFloat64(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}



class StringUTF8NeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        this.setter.call(object, inflow.getStringUTF8());
    }
}




class StringUTF8ArrayNeField extends NeField {


    /**
     * 
     * @param {ByteInflow} inflow 
     */
    setValue(object, inflow) {
        let length = inflow.getUInt7x();
        if (length >= 0) {
            let array = new Array(length);
            for (let i = 0; i < length; i++) { array[i] = inflow.getStringUTF8(); }
            this.setter.call(object, array);
        }
        else {
            this.setter.call(object, null);
        }
    }
}


class S8ObjectNeField extends NeField {

    /**
     * 
     * @param {*} object 
     * @param {ByteInflow} inflow 
     * @param {Array} bindings 
     */
    setValue(object, inflow, bindings) {
        let index = inflow.getStringUTF8();
        if(index != null){
            bindings.push(function(map){
                let value = map.get(index);
                this.setter.call(object, value);
            });
        }
        else {
            this.setter.call(object, null);
        }
    }
}



class S8ObjectArrayNeField extends NeField {


    /**
     * 
     * @param {*} object 
     * @param {ByteInflow} inflow 
     * @param {Array} bindings 
     */
    setValue(object, inflow, bindings) {
        let length = inflow.getUInt7x();
        if(length >= 0){
            let indices = new Array(length);
            for(let i = 0; i<length; i++) { indices[i] = inflow.getStringUTF8(); }
            bindings.push(function(map){
                let array = new Array(length);
                for(let i = 0; i<length; i++) { array[i] = map.get(indices[i]); }
                this.setter.call(object, array);
            });
        }
        else{
            this.setter.call(object, null);
        }
    }
}
