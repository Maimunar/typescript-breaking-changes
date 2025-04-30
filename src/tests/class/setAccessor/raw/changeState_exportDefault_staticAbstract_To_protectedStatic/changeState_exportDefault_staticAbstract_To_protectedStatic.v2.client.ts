import TestClass from "./changeState_exportDefault_staticAbstract_To_protectedStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
