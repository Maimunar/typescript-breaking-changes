import { TestClass } from "./RemoveMethodParam_exportDeclare_publicAsync_none.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
