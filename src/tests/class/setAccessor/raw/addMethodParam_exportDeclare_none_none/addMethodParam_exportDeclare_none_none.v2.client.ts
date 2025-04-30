import { TestClass } from "./addMethodParam_exportDeclare_none_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
