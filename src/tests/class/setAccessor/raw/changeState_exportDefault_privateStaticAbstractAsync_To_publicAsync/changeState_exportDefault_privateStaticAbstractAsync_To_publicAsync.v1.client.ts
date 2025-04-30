import TestClass from "./changeState_exportDefault_privateStaticAbstractAsync_To_publicAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
