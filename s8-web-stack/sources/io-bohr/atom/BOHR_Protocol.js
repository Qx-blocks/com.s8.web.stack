


/**
 * Data type declaration for field signatures
 */
export const Signature = {

    /* <SYSTEM : 0x0X > */
    /* </SYSTEM: 0x0X > */


    /* <SYSTEM_STRUCTURE : 0x1X > */
    /* </SYSTEM_STRUCTURE : 0x1X > */


    /* <BYTE: 0x2X > */
    BYTE: 0x20,
    /* </BYTE: 0x0X > */


    /* <BYTES_ARRAY : 0x3X > */
    BYTE_BUFFER: 0x30,
    /* </BYTES_ARRAY : 0x3X > */


    /* <BOOLEAN : 0x4X > */
    BOOL: 0x40,
    /* </BOOLEAN : 0x4X > */

    /* <BOOLEAN_ARRAY : 0x5X > */
    BIT_ARRAY: 0x50,
    /* </BOOLEAN_ARRAY : 0x5X > */


    /* <UNSIGNED_INTEGER : 0x6X > */
    UINT: [
        Encoding.ZERO_UINT,
        Encoding.UINT8,
        Encoding.UINT16,
        Encoding.UINT24,
        Encoding.UINT32,
        Encoding.UINT40,
        Encoding.UINT48,
        Encoding.UINT56,
        Encoding.UINT64,
        Encoding.UINT15,
        Encoding.UINT31,
        Encoding.UINT53,
        Encoding.UINT63
    ],
    /* </UNSIGNED_INTEGER : 0x6X > */

    /* <UNSIGNED_INTEGER_ARRAY : 0x7X > */
    UINT_ARRAY: [
        Encoding.NULL_UINT_ARRAY,
        Encoding.UINT8_ARRAY32,
        Encoding.UINT16_ARRAY32,
        Encoding.UINT32_ARRAY32,
        Encoding.UINT64_ARRAY32
    ],

    UINT8_ARRAY: [
        Encoding.NULL_UINT_ARRAY,
        Encoding.UINT8_ARRAY32
    ],

    UINT16_ARRAY: [
        Encoding.NULL_UINT_ARRAY,
        Encoding.UINT16_ARRAY32
    ],

    UINT32_ARRAY: [
        Encoding.NULL_UINT_ARRAY,
        Encoding.UINT32_ARRAY32
    ],

    UINT64_ARRAY: [
        Encoding.NULL_UINT_ARRAY,
        Encoding.UINT64_ARRAY32
    ],
    /* </UNSIGNED_INTEGER_ARRAY : 0x7X > */


    /* <INTEGER : 0x8X > */
    INT: [
        Encoding.INT8,
        Encoding.INT16,
        Encoding.INT32,
        Encoding.INT64
    ],
    /* </INTEGER : 0x8X > */

    /* <INTEGER_ARRAY : 0x9X > */
    INT_ARRAY: [
        Encoding.INT8_ARRAY32,
        Encoding.INT16_ARRAY32,
        Encoding.INT32_ARRAY32,
        Encoding.INT64_ARRAY32
    ],

    /* </INTEGER_ARRAY : 0x9X > */

    /* <FLOAT : 0xaX > */
    FLOAT: [
        Encoding.ZERO_FLOAT,
        Encoding.ONE_FLOAT,
        Encoding.POSITIVE_FLOAT_INFINITY,
        Encoding.NEGATIVE_FLOAT_INFINITY,
        Encoding.FLOAT32,
        Encoding.FLOAT64,
        Encoding.NOT_A_FLOAT_NUMBER
    ],

    FLOAT32: [
        Encoding.ZERO_FLOAT,
        Encoding.ONE_FLOAT,
        Encoding.POSITIVE_FLOAT_INFINITY,
        Encoding.NEGATIVE_FLOAT_INFINITY,
        Encoding.FLOAT32,
        Encoding.NOT_A_FLOAT_NUMBER
    ],

    FLOAT64: [
        Encoding.ZERO_FLOAT,
        Encoding.ONE_FLOAT,
        Encoding.POSITIVE_FLOAT_INFINITY,
        Encoding.NEGATIVE_FLOAT_INFINITY,
        Encoding.FLOAT64,
        Encoding.NOT_A_FLOAT_NUMBER
    ],
    /* </FLOAT : 0xaX > */

    /* <FLOAT_ARRAY : 0xbX > */
    FLOAT_ARRAY: [
        Encoding.NULL_FLOAT_ARRAY,
        Encoding.FLOAT32_ARRAY8,
        Encoding.FLOAT64_ARRAY8,
        Encoding.FLOAT32_ARRAY32,
        Encoding.FLOAT64_ARRAY32
    ],

    FLOAT32_ARRAY: [
        Encoding.NULL_FLOAT_ARRAY,
        Encoding.FLOAT32_ARRAY8,
        Encoding.FLOAT32_ARRAY32,
    ],

    FLOAT64_ARRAY: [
        Encoding.NULL_FLOAT_ARRAY,
        Encoding.FLOAT64_ARRAY8,
        Encoding.FLOAT64_ARRAY32,
    ],
    /* </FLOAT_ARRAY : 0xbX > */

    /* <STRING : 0xcX > */
    STRING : [
        Encoding.NULL_STRING,
        Encoding.EMPTY_STRING,
        Encoding.UTF8_L8STRING,
        Encoding.UTF8_L16STRING,
        Encoding.UTF8_L32STRING
    ],

    /* </STRING : 0xcX > */

    /* <STRING_ARRAY : 0xdX > */
    STRING_ARRAY : [
        Encoding.UTF8_STRING_ARRAY8,
        Encoding.UTF8_STRING_ARRAY16,
        Encoding.UTF8_STRING_ARRAY16
    ],
    /* </STRING_ARRAY : 0xdX > */


    /* <OBJECT : 0xeX > */
    OBJECT: [
        Encoding.NULL_OBJECT,
        Encoding.OBJECT_ID8,
        Encoding.OBJECT_ID16,
        Encoding.OBJECT_ID24,
        Encoding.OBJECT_ID32,
        Encoding.OBJECT_ID40,
        Encoding.OBJECT_ID48,
        Encoding.OBJECT_ID56,
        Encoding.OBJECT_ID64
    ],
    /* </OBJECT : 0xeX > */

    /* <OBJECT_ARRAY : 0xfX > */
    OBJECT_ARRAY: [
        Encoding.NULL_OBJECT_ARRAY,
        Encoding.OBJECT_ID_ARRAY8,
        Encoding.OBJECT_ID_ARRAY16,
        Encoding.OBJECT_ID_ARRAY32
    ]
    /* </OBJECT_ARRAY : 0xfX > */
}



/**
 * Precise encoding of data
 */
export const Encoding = {

    /* <SYSTEM : 0x0X > */

    /**
     * Most fundamental property
     */
    BYTE: 0x00,

    /* </SYSTEM: 0x0X > */


    /* <SYSTEM_STRUCTURE : 0x1X > */

    NULL: 0x10,

    BYTE_BUFFER: 0x12,

    ARRAY: 0x13,

    MAP: 0x14,

    STRUCT: 0x18,

    /* </SYSTEM_STRUCTURE : 0x1X > */


    /* <BYTE: 0x2X > */
    BYTE: 0x20,

    /* </BYTE: 0x0X > */


    /* <BYTES_ARRAY : 0x3X > */
    BYTE_BUFFER: 0x32,
    X_BYTE_BUFFER: 0x32,

    /* </BYTES_ARRAY : 0x3X > */


    /* <BOOLEAN : 0x4X > */

    /**
     * special value for false
     */
    FALSE_BOOL8: 0x43,

    /**
     * for pattern
     */
    TRUE_BOOL8: 0x47,

    /* </BOOLEAN : 0x4X > */

    /* <BOOLEAN_ARRAY : 0x5X > */

    NULL_BOOL_ARRAY: 0x50,
    BIT_ARRAY: 0x51,

    /* </BOOLEAN_ARRAY : 0x5X > */


    /* <UNSIGNED_INTEGER : 0x6X > */
    ZERO_UINT: 0x60,
    UINT8: 0x61,
    UINT16: 0x62,
    UINT24: 0x63,
    UINT32: 0x64,
    UINT40: 0x65,
    UINT48: 0x66,
    UINT56: 0x67,
    UINT64: 0x68,

    UINT15: 0x6a,
    UINT31: 0x6b,
    UINT53: 0x6c,
    UINT63: 0x6d,

    /* </UNSIGNED_INTEGER : 0x6X > */

    /* <UNSIGNED_INTEGER_ARRAY : 0x7X > */
    NULL_UINT_ARRAY: 0x71,
    UINT8_ARRAY32: 0x71,
    UINT16_ARRAY32: 0x72,
    UINT32_ARRAY32: 0x74,
    UINT64_ARRAY32: 0x78,

    /* </UNSIGNED_INTEGER_ARRAY : 0x7X > */


    /* <INTEGER : 0x8X > */
    ZERO_INT : 0x80,
    INT8: 0x81,
    INT16: 0x82,
    INT32: 0x84,
    INT64: 0x88,

    /* </INTEGER : 0x8X > */

    /* <INTEGER_ARRAY : 0x9X > */
    NULL_INT_ARRAY: 0x71,
    INT8_ARRAY32: 0x91,
    INT16_ARRAY32: 0x92,
    INT32_ARRAY32: 0x94,
    INT64_ARRAY32: 0x98,

    /* </INTEGER_ARRAY : 0x9X > */

    /* <FLOAT : 0xaX > */
    ZERO_FLOAT: 0xa0,
    ONE_FLOAT: 0xa1,
    POSITIVE_FLOAT_INFINITY: 0xa2,
    NEGATIVE_FLOAT_INFINITY: 0xa3,

    FLOAT32: 0xa4,
    FLOAT64: 0xa8,

    NOT_A_FLOAT_NUMBER: 0xaf,
    /* </FLOAT : 0xaX > */

    /* <FLOAT_ARRAY : 0xbX > */
    NULL_FLOAT_ARRAY: 0xb0,

    FLOAT32_ARRAY8: 0xb2,

    /**
     * for vector{2,3,4}d, matrix{2,3,4}d and affines.
     */
    FLOAT64_ARRAY8: 0xb4,

    /**
     * For general purpose geometry buffer (vertex attributes for instance)
     */
    FLOAT32_ARRAY32: 0xb6,

    /**
     * 
     */
    FLOAT64_ARRAY32: 0xb8,
    /* </FLOAT_ARRAY : 0xbX > */

    /* <STRING : 0xcX > */
    NULL_STRING: 0xc0,
    EMPTY_STRING: 0xc1,
    UTF8_L8STRING: 0xc2,
    UTF8_L16STRING: 0xc3,
    UTF8_L32STRING: 0xc4,
    /* </STRING : 0xcX > */

    /* <STRING_ARRAY : 0xdX > */
    NULL_STRING_ARRAY: 0xd0,
    UTF8_STRING_ARRAY8: 0xd2,
    UTF8_STRING_ARRAY16: 0xd3,
    UTF8_STRING_ARRAY32: 0xd4,
    /* </STRING_ARRAY : 0xdX > */


    /* <OBJECT : 0xeX > */
    NULL_OBJECT: 0xe1,
    OBJECT_ID8: 0xe1,
    OBJECT_ID16: 0xe2,
    OBJECT_ID24: 0xe3,
    OBJECT_ID32: 0xe4,
    OBJECT_ID40: 0xe5,
    OBJECT_ID48: 0xe6,
    OBJECT_ID56: 0xe7,
    OBJECT_ID64: 0xe8,
    /* </OBJECT : 0xeX > */

    /* <OBJECT_ARRAY : 0xfX > */
    NULL_OBJECT_ARRAY: 0xf0,
    OBJECT_ID_ARRAY8: 0xf1,
    OBJECT_ID_ARRAY16: 0xf2,
    OBJECT_ID_ARRAY32: 0xf4

    /* </OBJECT_ARRAY : 0xfX > */
};






/**
 * 
 * @param {number} signature 
 * @returns {Array}
 */
export function getTypeSetForSignature(signature) {

    switch (signature) {

        case Signature.BYTE:
            return [
                Encoding.BYTE
            ];

        case Signature.BOOL:
            return [
                Encoding.TRUE_BOOL8,
                Encoding.FALSE_BOOL8
            ];

        case Signature.BIT_ARRAY:
            return [
                Encoding.BIT_ARRAY,
                Encoding.NULL_BOOL_ARRAY
            ];

        case Signature.UINT:
            return [
                Encoding.uin,
                Encoding.NULL_BOOL_ARRAY
            ];


    }
}



export const Request = {


    /* </methods> */


    /* <targets> */

    /**
     * 
     */
    VIEW_INDEX: 0x21,

    METHOD_CODE: 0x24,

    /* </targets> */


    /* <parameters> */


    /** param0 */
    PARAMETER_CODES: [0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47],

    /* <parameters> */


    /* <termination code> */
    TERMINATED: 0x72,

};


export const Response = {

    /**
     * 
     */
    OPEN_DELTA: 0x0b,


    /**
     * 
     */
    REDEFINE_ROOT: 0x12,


    /**
     * 
     */
    DECLARE_TYPE_AND_CREATE_NODE: 0x22,

    /**
     * 
     */
    CREATE_NODE: 0x23,


    /**
     * 
     */
    UPDATE_NODE: 0x24,

    /**
     * 
     */
    DELETE_NODE: 0x28,


    /**
     * 
     */
    DEFINE_FIELD_AND_SET_FIELD_VALUE: 0x36,


    /**
     * 
     */
    SET_FIELD_VALUE: 0x37,


    /**
     * 
     */
    CLOSE_NODE: 0x42,


    /**
     * 
     */
    CLOSE_DELTA: 0x6b
};





