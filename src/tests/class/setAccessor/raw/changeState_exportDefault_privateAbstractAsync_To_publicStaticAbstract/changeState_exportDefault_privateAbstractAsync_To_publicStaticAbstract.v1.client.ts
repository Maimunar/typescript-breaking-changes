import TestClass from "./changeState_exportDefault_privateAbstractAsync_To_publicStaticAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
