import TestClass from "./changeState_exportDefault_abstract_To_private.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
