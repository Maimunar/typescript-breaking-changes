import TestClass from "./changeState_exportDefault_publicStaticAsync_To_privateStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
