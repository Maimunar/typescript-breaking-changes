import { TestClass } from "./addMethodParam_exportDeclare_static_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
