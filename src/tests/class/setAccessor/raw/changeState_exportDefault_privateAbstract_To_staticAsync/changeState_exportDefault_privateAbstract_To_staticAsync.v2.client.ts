import TestClass from "./changeState_exportDefault_privateAbstract_To_staticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
