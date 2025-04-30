import TestClass from "./changeState_exportDefault_protectedStaticAsync_To_publicAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
