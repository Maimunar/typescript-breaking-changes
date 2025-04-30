import TestClass from "./changeState_exportDefault_protectedStaticAbstract_To_protectedStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
