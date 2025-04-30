import TestClass from "./changeState_exportDefault_publicStatic_To_publicReadonlyStaticDeclare.v2";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
