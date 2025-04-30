import { TestClass } from "./addMethodParam_export_publicStatic_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
