import { TestClass } from "./RemoveMethodParam_export_privateAbstractAsync_none.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
