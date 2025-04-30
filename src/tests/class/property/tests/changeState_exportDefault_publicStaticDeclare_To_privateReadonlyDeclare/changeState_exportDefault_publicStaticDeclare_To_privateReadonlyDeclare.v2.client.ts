import TestClass from "./changeState_exportDefault_publicStaticDeclare_To_privateReadonlyDeclare.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
