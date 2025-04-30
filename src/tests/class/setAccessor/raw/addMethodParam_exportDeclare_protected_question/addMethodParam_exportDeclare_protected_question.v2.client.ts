import { TestClass } from "./addMethodParam_exportDeclare_protected_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
