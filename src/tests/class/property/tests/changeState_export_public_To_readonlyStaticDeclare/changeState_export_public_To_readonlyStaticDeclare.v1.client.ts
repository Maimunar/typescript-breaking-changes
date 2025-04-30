import { TestClass } from "./changeState_export_public_To_readonlyStaticDeclare.v1";

const testClass = new TestClass();
const res = testClass.testProperty;
testClass.testProperty = 2;
