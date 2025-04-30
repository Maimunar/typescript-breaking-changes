import TestClass from "./changeState_exportDefault_privateAbstractAsync_To_publicStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
