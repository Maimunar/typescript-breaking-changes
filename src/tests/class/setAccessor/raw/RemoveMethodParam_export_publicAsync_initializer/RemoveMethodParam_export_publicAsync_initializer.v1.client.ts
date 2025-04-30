import { TestClass } from "./RemoveMethodParam_export_publicAsync_initializer.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
