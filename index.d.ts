/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

/**
* If provided a value, returns an updated sum; otherwise, returns the current sum.
*
* @param x - value
* @returns sum
*/
type accumulator = ( x?: number ) => number | null;

/**
* Returns an accumulator function which incrementally computes a sum, ignoring `NaN` values.
*
* @returns accumulator function
*
* @example
* var accumulator = incrnansum();
*
* var v = accumulator();
* // returns null
*
* v = accumulator( 2.0 );
* // returns 2.0
*
* v = accumulator( 3.0 );
* // returns 5.0
*
* v = accumulator( NaN );
* // returns 5.0
*
* v = accumulator( 4.0 );
* // returns 9.0
*
* v = accumulator();
* // returns 9.0
*/
declare function incrnansum(): accumulator;


// EXPORTS //

export = incrnansum;
