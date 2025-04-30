import TestClass from "./changeState_exportDefault_protectedAbstract_To_abstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
