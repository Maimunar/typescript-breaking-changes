import { TestClass } from "./addMethodParam_export_protectedStaticAsync_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
