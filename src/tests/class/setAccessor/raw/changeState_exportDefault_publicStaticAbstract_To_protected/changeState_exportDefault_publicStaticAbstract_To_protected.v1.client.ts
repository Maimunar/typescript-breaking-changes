import TestClass from "./changeState_exportDefault_publicStaticAbstract_To_protected.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
