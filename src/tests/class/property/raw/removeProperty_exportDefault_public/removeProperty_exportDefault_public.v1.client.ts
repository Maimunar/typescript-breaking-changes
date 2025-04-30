import TestClass from "./removeProperty_exportDefault_public.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
