import TestClass from "./changeState_exportDefault_publicStaticAbstract_To_privateStaticAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
