import TestClass from "./changeState_exportDefault_publicAbstractAsync_To_staticAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
