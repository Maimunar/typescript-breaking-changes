import TestClass from "./changeState_exportDefault_abstractAsync_To_publicStaticAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
