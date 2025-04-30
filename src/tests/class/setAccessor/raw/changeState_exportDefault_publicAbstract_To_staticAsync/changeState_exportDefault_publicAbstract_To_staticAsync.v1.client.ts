import TestClass from "./changeState_exportDefault_publicAbstract_To_staticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
