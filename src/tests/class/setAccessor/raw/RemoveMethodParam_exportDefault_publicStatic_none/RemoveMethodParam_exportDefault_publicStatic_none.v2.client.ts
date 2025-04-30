import TestClass from "./RemoveMethodParam_exportDefault_publicStatic_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod(1);
