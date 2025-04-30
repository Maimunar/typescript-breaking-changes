import TestClass from "./changeState_exportDefault_publicAsync_To_publicAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
