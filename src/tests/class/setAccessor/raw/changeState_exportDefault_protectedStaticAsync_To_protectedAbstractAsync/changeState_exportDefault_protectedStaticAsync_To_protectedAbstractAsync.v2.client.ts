import TestClass from "./changeState_exportDefault_protectedStaticAsync_To_protectedAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
