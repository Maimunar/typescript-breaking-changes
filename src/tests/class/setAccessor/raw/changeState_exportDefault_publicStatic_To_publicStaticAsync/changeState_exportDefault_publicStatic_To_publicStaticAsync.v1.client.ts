import TestClass from "./changeState_exportDefault_publicStatic_To_publicStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
