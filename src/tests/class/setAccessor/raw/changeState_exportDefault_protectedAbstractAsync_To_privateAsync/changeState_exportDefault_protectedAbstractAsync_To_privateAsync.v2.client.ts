import TestClass from "./changeState_exportDefault_protectedAbstractAsync_To_privateAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
