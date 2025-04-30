import TestClass from "./changeState_exportDefault_To_exportAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
testClass.testMethod();
