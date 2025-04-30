import TestClass from "./changeState_exportDefault_protectedStaticAbstractAsync_To_protectedAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
