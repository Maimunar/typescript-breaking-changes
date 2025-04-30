import { TestClass } from "./addMethodParam_exportDeclare_abstract_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
