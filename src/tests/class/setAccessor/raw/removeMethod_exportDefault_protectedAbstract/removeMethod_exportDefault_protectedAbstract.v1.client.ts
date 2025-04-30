import TestClass from "./removeMethod_exportDefault_protectedAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
