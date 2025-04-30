import TestClass from "./changeState_exportDefault_protectedAsync_To_protectedAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
