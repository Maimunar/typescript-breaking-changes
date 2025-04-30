import { TestClass } from "./changeState_export_public_To_readonly.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
