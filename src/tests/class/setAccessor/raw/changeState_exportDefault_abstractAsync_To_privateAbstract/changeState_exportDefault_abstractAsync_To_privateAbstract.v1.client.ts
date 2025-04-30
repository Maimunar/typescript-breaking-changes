import TestClass from "./changeState_exportDefault_abstractAsync_To_privateAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
