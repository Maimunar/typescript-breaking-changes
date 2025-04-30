import TestClass from "./changeState_exportDefault_publicStatic_To_privateStaticDeclare.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
