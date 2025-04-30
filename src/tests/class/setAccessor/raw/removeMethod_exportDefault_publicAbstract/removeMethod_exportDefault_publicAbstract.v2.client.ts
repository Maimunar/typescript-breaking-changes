import TestClass from "./removeMethod_exportDefault_publicAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
