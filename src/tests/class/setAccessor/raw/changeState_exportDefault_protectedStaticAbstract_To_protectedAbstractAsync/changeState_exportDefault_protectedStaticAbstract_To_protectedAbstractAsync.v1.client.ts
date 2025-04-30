import TestClass from "./changeState_exportDefault_protectedStaticAbstract_To_protectedAbstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
