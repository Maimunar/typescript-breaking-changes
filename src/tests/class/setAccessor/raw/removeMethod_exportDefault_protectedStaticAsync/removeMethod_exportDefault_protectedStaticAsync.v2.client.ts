import TestClass from "./removeMethod_exportDefault_protectedStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
