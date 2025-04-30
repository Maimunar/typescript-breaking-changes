import { TestClass } from "./addMethodParam_export_protectedAsync_none.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
