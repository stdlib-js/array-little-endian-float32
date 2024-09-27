/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in little-endian byte order.
*
* @module @stdlib/array-little-endian-float32
*
* @example
* var Float32ArrayLE = require( '@stdlib/array-little-endian-float32' );
*
* var arr = new Float32ArrayLE();
* // returns <Float32ArrayLE>
*
* var len = arr.length;
* // returns 0
*
* @example
* var Float32ArrayLE = require( '@stdlib/array-little-endian-float32' );
*
* var arr = new Float32ArrayLE( 2 );
* // returns <Float32ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var Float32ArrayLE = require( '@stdlib/array-little-endian-float32' );
*
* var arr = new Float32ArrayLE( [ 1.0 ] );
* // returns <Float32ArrayLE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
* var Float32ArrayLE = require( '@stdlib/array-little-endian-float32' );
*
* var buf = new ArrayBuffer( 8 );
* var arr = new Float32ArrayLE( buf );
* // returns <Float32ArrayLE>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
* var Float32ArrayLE = require( '@stdlib/array-little-endian-float32' );
*
* var buf = new ArrayBuffer( 8 );
* var arr = new Float32ArrayLE( buf, 4 );
* // returns <Float32ArrayLE>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array-buffer' );
* var Float32ArrayLE = require( '@stdlib/array-little-endian-float32' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Float32ArrayLE( buf, 8, 2 );
* // returns <Float32ArrayLE>
*
* var len = arr.length;
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;