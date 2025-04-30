import TestClass from "./changeState_exportDefault_privateStatic_To_protectedStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
