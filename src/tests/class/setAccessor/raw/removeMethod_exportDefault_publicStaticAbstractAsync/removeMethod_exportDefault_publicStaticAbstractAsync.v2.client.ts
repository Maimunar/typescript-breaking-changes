import TestClass from "./removeMethod_exportDefault_publicStaticAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
