import TestClass from "./changeState_exportDefault_publicStaticAbstractAsync_To_protectedStaticAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
