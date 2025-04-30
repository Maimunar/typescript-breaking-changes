import { TestClass } from "./addMethodParam_export_publicStaticAsync_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
