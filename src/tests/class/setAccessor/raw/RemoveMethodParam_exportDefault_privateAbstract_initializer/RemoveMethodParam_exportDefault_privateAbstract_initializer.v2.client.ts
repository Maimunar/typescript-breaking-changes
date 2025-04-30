import TestClass from "./RemoveMethodParam_exportDefault_privateAbstract_initializer.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
