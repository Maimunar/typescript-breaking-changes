import TestClass from "./changeState_exportDefault_publicStaticDeclare_To_protectedAbstractDeclare.v1";

const testClass = new TestClass();
const res = TestClass.testProperty;
TestClass.testProperty = 2;
