import TestClass from "./removeMethod_exportDefault_publicStaticAbstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
