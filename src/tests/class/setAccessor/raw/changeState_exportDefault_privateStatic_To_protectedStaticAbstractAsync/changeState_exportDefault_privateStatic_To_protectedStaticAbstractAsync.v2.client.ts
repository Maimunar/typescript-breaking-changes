import TestClass from "./changeState_exportDefault_privateStatic_To_protectedStaticAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
