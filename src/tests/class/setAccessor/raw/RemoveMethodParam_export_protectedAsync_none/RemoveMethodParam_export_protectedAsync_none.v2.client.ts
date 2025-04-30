import { TestClass } from "./RemoveMethodParam_export_protectedAsync_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
