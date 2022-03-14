

import { BOHR_Encoding } from '../bohr/BOHR_Protocol';
import { NeSphere } from './NeSphere';
import { ArrayBindingNeFieldValue, DirectNeFieldValue, SingleBindingNeFieldValue } from './NeFieldValue';

import { Encoding as BOHR } from '../bohr/BOHR_Protocol';
import { ByteInflow } from '../helium/ByteInflow';





/**
 * 
 */
export class NeInflow extends ByteInflow {

	constructor(arraybuffer) {
		super(arraybuffer);
	}


	retrieve() {

		let code = this.getUInt8();


		let direct = function (value) {
			return new DirectNeFieldValue(code, value);
		}

		let bind1 = function (value) {
			return new SingleBindingNeFieldValue(code, value);
		}

		let bindN = function (value) {
			return new ArrayBindingNeFieldValue(code, value);
		}

		let length = 0, value, array;

		switch (code) { /* retrieve field value encoding */

			/* <boolean> */
			case BOHR.TRUE_BOOL8: return direct(true);
			case BOHR.FALSE_BOOL8: return direct(false);

			/* </boolean> */

			/* <boolean-array> */
			case BOHR.BIT_ARRAY: return direct(this.retrieveBooleanArray());
			/* </boolean-array> */

			/* <unsigned_integer> */
			case BOHR.ZERO_UINT: return direct(0);
			case BOHR.UINT8: return direct(this.getUInt8());
			case BOHR.UINT16: return direct(this.getUInt16());
			case BOHR.UINT24: throw "Not implemented yet";
			case BOHR.UINT32: return direct(this.getUInt32());
			case BOHR.UINT64: return direct(this.getUInt64());
			/* </unsigned_integer> */

			/* <unsigned-integer-ARRAY> */
			case BOHR.NULL_UINT_ARRAY: return direct(null);

			case BOHR.UINT8_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Uint8Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getUInt8(); }
				return direct(array);

			case BOHR.UINT16_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Uint16Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getUInt16(); }
				return direct(array);

			case BOHR.UINT32_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Uint32Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getUInt32(); }
				return direct(array);


			case BOHR.UINT64_ARRAY32: throw "Not supported in JS";
			/* </unsigned-integer-ARRAY> */

			/* <integer> */
			case BOHR.ZERO_INT: return direct(0);
			case BOHR.INT8: return direct(this.getInt8());
			case BOHR.INT16: return direct(this.getInt16());
			case BOHR.INT32: return direct(this.getInt32());
			case BOHR.INT64: return direct(this.getInt64());
			/* </integer> */

			/* <integer-ARRAY> */
			case BOHR.NULL_INT_ARRAY: return direct(null);

			case BOHR.INT8_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Int8Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getInt8(); }
				return direct(array);

			case BOHR.INT16_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Int16Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getInt16(); }
				return direct(array);

			case BOHR.INT32_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Int32Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getInt32(); }
				return direct(array);

			case BOHR.INT64_ARRAY32: throw "Not supported in JS";
			/* </integer-ARRAY> */

			/* <float> */
			case BOHR.ZERO_FLOAT: return direct(0.00);
			case BOHR.ONE_FLOAT: return direct(1.0);
			case BOHR.NOT_A_FLOAT_NUMBER: return direct(Number.NaN);
			case BOHR.POSITIVE_FLOAT_INFINITY: return direct(Number.POSITIVE_INFINITY);
			case BOHR.NEGATIVE_FLOAT_INFINITY: return direct(Number.NEGATIVE_INFINITY);

			case BOHR.FLOAT32: return direct(this.getFloat32());
			case BOHR.FLOAT64: return direct(this.getFloat64());
			/* </float> */

			/* <float-ARRAY> */
			case BOHR.NULL_FLOAT_ARRAY: return direct(null);
			case BOHR.FLOAT32_ARRAY8:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt8();
				array = new Float32Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getFloat32(); }
				return direct(array);

			case BOHR.FLOAT64_ARRAY8:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt8();
				array = new Float64Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getFloat64(); }
				return direct(array);

			case BOHR.FLOAT32_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Float32Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getFloat32(); }
				return direct(array);

			case BOHR.FLOAT64_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt32();
				array = new Float64Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.getFloat64(); }
				return direct(array);

			/* </float-ARRAY> */


			/* <string> */
			case BOHR.NULL_STRING: return direct(null);
			case BOHR.EMPTY_STRING: return direct("");
			case BOHR.UTF8_L8STRING: return direct(this.getL8StringUTF8());
			case BOHR.UTF8_L16STRING: return direct(this.getL16StringUTF8());
			case BOHR.UTF8_L32STRING: return direct(this.getL32StringUTF8());
			/* </string> */


			/* <string-ARRAY> */
			case BOHR.NULL_STRING_ARRAY: return direct(null);

			case BOHR.UTF8_STRING_ARRAY8:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt8();
				array = new Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.retrieveString(); }
				return direct(array);

			case BOHR.UTF8_STRING_ARRAY16:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt16();
				array = new Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.retrieveString(); }
				return direct(array);

			case BOHR.UTF8_STRING_ARRAY32:
				// always recopy since non-memory aligned buffer are not supported everywhere...
				length = this.getUInt16();
				array = new Array(length);
				for (let i = 0; i < length; i++) { array[i] = this.retrieveString(); }
				return direct(array);
			/* </string-ARRAY> */



			/* <object> */

			case BOHR.NULL_OBJECT: return direct("NULL");

			case BOHR.OBJECT_ID8: return bind1(this.getIndex(1));
			case BOHR.OBJECT_ID16: return bind1(this.getIndex(2));
			case BOHR.OBJECT_ID24: return bind1(this.getIndex(3));
			case BOHR.OBJECT_ID32: return bind1(this.getIndex(4));
			case BOHR.OBJECT_ID40: return bind1(this.getIndex(5));
			case BOHR.OBJECT_ID48: return bind1(this.getIndex(6));
			case BOHR.OBJECT_ID56: return bind1(this.getIndex(7));
			case BOHR.OBJECT_ID64: return bind1(this.getIndex(8));
			/* </object> */

			/* <Object[]> */
			case BOHR.OBJECT_ID_ARRAY8: 

			bindings.push(new ArrayBinding(target, this.retrieveIdArray())); break;
			/* </Object[]> */

			case BOHR_Encoding.ENABLED_METHOD: target.value = this.getUInt8(); break;

			case BOHR_Encoding.DISABLED_METHOD: target.value = this.getUInt8(); break;

			default: throw "Failed to capture field type code: " + code;
		}
	}


	retrieve() {

		let entry = {};

		/* first read the field definition byte */
		let code = this.getUInt8();


	}


	decode() {

		/* first read the field definition byte */
		let length, i, hashCode, fieldName;

		let code = this.getUInt8();

		switch (code) { /* retrieve field value encoding */

			/* <boolean> */
			case BOHR_Encoding.TRUE_BOOL8: return true;
			case BOHR_Encoding.FALSE_BOOL8: return false;
			case BOHR_Encoding.BOOLEAN_ARRAY: return this.retrieveBooleanArray();
			/* </boolean> */

			/* <unsigned_integer> */
			case BOHR_Encoding.ZERO_INT: return 0;
			case BOHR_Encoding.UINT8: return this.getUInt8();
			case BOHR_Encoding.UINT16: return this.getUInt16();
			case BOHR_Encoding.UINT31: return this.getUInt32();
			case BOHR_Encoding.UINT63: return this.getUInt64();
			case BOHR_Encoding.UINT8_ARRAY: return this.retrieveUInt8Array();
			case BOHR_Encoding.UINT16_ARRAY: return this.retrieveUInt16Array();
			case BOHR_Encoding.UINT32_ARRAY: return this.retrieveUInt32Array();
			/* </unsigned_integer> */

			/* <integer> */
			case BOHR_Encoding.MINUS_ONE_INT: return -1;
			case BOHR_Encoding.INT16: return this.getInt16();
			case BOHR_Encoding.INT32: return this.getInt32();
			case BOHR_Encoding.INT64: return this.getInt64();

			case BOHR_Encoding.SHORT_ARRAY: return this.retrieveShortArray();
			case BOHR_Encoding.INTEGER_ARRAY: return this.retrieveIntegerArray();
			case BOHR_Encoding.LONG_ARRAY: return this.retrieveLongArray();
			/* </integer> */

			/* <float> */
			case BOHR_Encoding.ZERO_FLOAT: return 0.00;
			case BOHR_Encoding.FLOAT32: return this.getFloat32();
			case BOHR_Encoding.FLOAT64: return this.getFloat64();
			case BOHR_Encoding.FLOAT_ARRAY: return this.retrieveFloatArray();
			case BOHR_Encoding.DOUBLE_ARRAY: return this.retrieveDoubleArray();
			case BOHR_Encoding.FLOAT32_ARRAY: return this.retrieveFloat32Array();
			case BOHR_Encoding.FLOAT64_ARRAY: return this.retrieveFloat64Array();
			/* </float> */

			/* <string> */
			case BOHR_Encoding.L8_STRING_ASCII: return this.get();
			case BOHR_Encoding.L32_STRING_UTF8: return this.getL32StringUTF8();
			case BOHR_Encoding.STRING_ARRAY: return this.retrieveStringArray();
			/* </string> */

			/* <index> */

			case BOHR_Encoding.NULL_ID: return null;

			case BOHR_Encoding.ID_UINT8: return this.getIndex(1);
			case BOHR_Encoding.ID_UINT16: return this.getIndex(2);
			case BOHR_Encoding.ID_UINT24: return this.getIndex(3);
			case BOHR_Encoding.ID_UINT32: return this.getIndex(4);
			case BOHR_Encoding.ID_UINT40: return this.getIndex(5);
			case BOHR_Encoding.ID_UINT48: return this.getIndex(6);
			case BOHR_Encoding.ID_UINT56: return this.getIndex(7);
			case BOHR_Encoding.ID_UINT63: return this.getIndex(8);

			case BOHR_Encoding.ID_ARRAY: return this.retrieveIdArray();
			/* </index> */

			case BOHR_Encoding.ENABLED_METHOD: return this.getUInt8();
			case BOHR_Encoding.DISABLED_METHOD: return this.getUInt8();

			default: throw "Failed to capture field type code: " + code;
		}
	}



	retrieveArrayLength() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_INT: return 0;
			case BOHR_Encoding.MINUS_ONE_INT: return -1;
			case BOHR_Encoding.UINT8: return this.getUInt8();
			case BOHR_Encoding.UINT16: return this.getUInt16();
			case BOHR_Encoding.UINT31: return this.getUInt31();
			default: throw "Failed to match code for this array";
		}
	}

	retrieveUnsignedInteger() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_INT: return 0;
			case BOHR_Encoding.MINUS_ONE_INT: return -1;
			case BOHR_Encoding.UINT8: return this.getUInt8();
			case BOHR_Encoding.UINT16: return this.getUInt16();
			case BOHR_Encoding.UINT31: return this.getUInt31();
			default: throw "Failed to match code for this array";
		}
	}




	/**
	 * 
	 * @param length
	 * @param inflow
	 * @return {boolean[]}
	 * @throws IOException
	 */
	retrieveBooleanArray() {
		let length = this.retrieveArrayLength();
		if (length >= 0) {
			let array = new Array(length);
			for (let i = 0; i < length; i++) {
				let code = thsi.getUInt8();
				if (code == BOHR_Encoding.FALSE_BOOL8) {
					array[i] = false;
				}
				else if (code == BOHR_Encoding.TRUE_BOOL8) {
					array[i] = true;
				}
				else {
					throw "Illegal code for this location: " + code;
				}
			}
			return array;
		}
		else {
			return null;
		}
	}



	retrieveShort() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_INT: return 0;
			case BOHR_Encoding.MINUS_ONE_INT: return -1;
			case BOHR_Encoding.UINT8: return this.getUInt8();
			case BOHR_Encoding.UINT16: return this.getUInt16();
			case BOHR_Encoding.INT16: return this.getInt16();
			default: throw "Failed to match code for this array";
		}
	}


	retrieveShortArray() {
		let length = this.retrieveArrayLength();
		if (length >= 0) {
			let array = new Array(length);
			for (let i = 0; i < length; i++) { array[i] = this.retrieveShort(); }
			return array;
		}
		else {
			return null;
		}
	}




	retrieveInteger() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_INT: return 0;
			case BOHR_Encoding.MINUS_ONE_INT: return -1;
			case BOHR_Encoding.UINT8: return this.getUInt8();
			case BOHR_Encoding.UINT16: return this.getUInt16();
			case BOHR_Encoding.UINT31: return this.getUInt31();
			case BOHR_Encoding.INT16: return this.getInt16();
			case BOHR_Encoding.INT32: return this.getInt32();
			default: throw "Failed to match code for this array";
		}
	}



	retrieveIntegerArray() {
		let length = retrieveArrayLength();
		if (length >= 0) {
			let array = new Array(length);
			for (let i = 0; i < length; i++) { array[i] = this.retrieveInteger(); }
			return array;
		}
		else {
			return null;
		}
	}

	retrieveUInt8Array() {
		let length = this.retrieveArrayLength();
		return length >= 0 ? new Uint8Array(this.arraybuffer, this.offset, this.length) : null;
	}

	retrieveUInt16Array() {
		let length = this.retrieveArrayLength();
		return length >= 0 ? new Uint16Array(this.arraybuffer, this.offset, this.length) : null;
	}

	retrieveUInt32Array() {
		let length = this.retrieveArrayLength();
		return length >= 0 ? new Uint32Array(this.arraybuffer, this.offset, this.length) : null;
	}

	retrieveLong() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_INT: return 0;
			case BOHR_Encoding.MINUS_ONE_INT: return -1;
			case BOHR_Encoding.UINT8: return this.getUInt8();
			case BOHR_Encoding.UINT16: return this.getUInt16();
			case BOHR_Encoding.UINT31: return this.getUInt31();
			case BOHR_Encoding.UINT63: return this.getUInt63();
			case BOHR_Encoding.INT16: return this.getInt16();
			case BOHR_Encoding.INT32: return this.getInt32();
			case BOHR_Encoding.INT64: return this.getInt64();
			default: throw "Failed to match code for this array";
		}
	}


	retrieveLongArray() {
		let length = retrieveArrayLength();
		if (length >= 0) {
			let array = new Array(length);
			for (let i = 0; i < length; i++) { array[i] = this.retrieveLong(); }
			return array;
		}
		else {
			return null;
		}
	}



	retrieveFloat() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_FLOAT: return 0.0;
			case BOHR_Encoding.FLOAT32: return this.getFloat32();
			case BOHR_Encoding.FLOAT64: return this.getFloat64();
			default: throw new IOException("Failed to match code for this array");
		}
	}


	/**
	 * 
	 * @param length
	 * @return
	 * @throws IOException
	 */
	retrieveFloatArray() {
		let length = this.retrieveArrayLength();
		if (length >= 0) {
			let array = new Float32Array(length);
			for (let i = 0; i < length; i++) { array[i] = this.retrieveFloat(); }
			return array;
		}
		else {
			return null;
		}
	}

	/**
	 * 
	 * @returns 
	 */
	retrieveFloat32Array() {
		let length = this.retrieveArrayLength();
		return length >= 0 ? new Float32Array(this.arraybuffer, this.offset, this.length) : null;
	}


	retrieveDouble() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR_Encoding.ZERO_FLOAT: return 0.0;
			case BOHR_Encoding.FLOAT32: return this.getFloat32();
			case BOHR_Encoding.FLOAT64: return this.getFloat64();
			default: throw "Failed to match code for this array";
		}
	}


	retrieveDoubleArray() {
		let length = this.retrieveArrayLength();
		if (length >= 0) {
			let array = new Float64Array(length);
			for (let i = 0; i < length; i++) { array[i] = this.retrieveDouble(); }
			return array;
		}
		else {
			return null;
		}
	}

	retrieveFloat64Array() {
		let length = this.retrieveArrayLength();
		return length >= 0 ? new Float64Array(this.arraybuffer, this.offset, this.length) : null;
	}




	retrieveString() {
		let code = this.getUInt8();
		switch (code) {
			case BOHR.NULL_STRING: return null;
			case BOHR.UTF8_L8STRING: return this.getL8StringUTF8();
			case BOHR.UTF8_L16STRING: return this.getL16StringUTF8();
			case BOHR.UTF8_L32STRING: return this.getL32StringUTF8();
			default: throw new IOException("Failed to match code for this array");
		}
	}


	/**
	 * 
	 * @param length
	 * @param inflow
	 * @return
	 * @throws IOException
	 */
	retrieveStringArray(length) {
		let length = this.retrieveArrayLength();
		if (length >= 0) {
			let array = new Array(length);
			for (let i = 0; i < length; i++) { array[i] = this.retrieveString(); }
			return array;
		}
		else {
			return null;
		}
	}



	retrieveObjectId() {
		switch (this.getUInt8()) {
			case BOHR.NULL_OBJECT: return -1;
			case BOHR.OBJECT_ID8:  return this.getIndex(1);
			case BOHR.OBJECT_ID16: return this.getIndex(2);
			case BOHR.OBJECT_ID24: return this.getIndex(3);
			case BOHR.OBJECT_ID32: return this.getIndex(4);
			case BOHR.OBJECT_ID40: return this.getIndex(5);
			case BOHR.OBJECT_ID48: return this.getIndex(6);
			case BOHR.OBJECT_ID56: return this.getIndex(7);
			case BOHR.OBJECT_ID64: return this.getIndex(8);
			default: "Failed to match code for this array";
		}
	}


	retrieveObjectIdArray(length) {
		let array = new Array(length);
		for (let i = 0; i < length; i++) { 
			array[i] = this.retrieveId(); 
		}
		return array;
	}
}


