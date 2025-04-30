import TestClass from "./changeState_exportDefault_staticAsync_To_static.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
