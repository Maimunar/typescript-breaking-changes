import TestClass from "./changeState_exportDefault_To_exportDeclare.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
testClass.testMethod();
