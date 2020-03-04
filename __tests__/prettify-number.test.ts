// Unit tests for prettify-number

import {prettifyNumber} from "../prettify-number";

const should = (input: number, output: string) => () => expect(prettifyNumber(input)).toBe(output);

// Tests given with problem
test("exact value", should(1000000, "1M"));
test("has decimal portion", should(2500000.34, "2.5M"));
test("number less than 1000", should(532, "532"));
test("billion and some", should(1123456789, "1.1B"));
test("trillion and some", should(9487634567534, "9.5T"));

// Additional tests
test("negative number", should(-2222, "-2222"));
test("zero", should(0, "0"));
test("small number with decimals", should(1.23456, "1.23456"));
test("billions and a tiny bit", should(9000000001, "9B"));
test("several hundred thousand", should(163929.7, "163929.7"));
test("just under a billion", should(999999999.9, "1B"));
