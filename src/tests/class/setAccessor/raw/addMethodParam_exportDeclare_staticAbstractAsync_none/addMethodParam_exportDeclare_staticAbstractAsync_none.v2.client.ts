import { TestClass } from "./addMethodParam_exportDeclare_staticAbstractAsync_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
