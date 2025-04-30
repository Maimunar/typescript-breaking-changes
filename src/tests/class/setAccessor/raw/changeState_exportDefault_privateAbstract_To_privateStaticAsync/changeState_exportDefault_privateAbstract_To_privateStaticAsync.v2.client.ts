import TestClass from "./changeState_exportDefault_privateAbstract_To_privateStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
