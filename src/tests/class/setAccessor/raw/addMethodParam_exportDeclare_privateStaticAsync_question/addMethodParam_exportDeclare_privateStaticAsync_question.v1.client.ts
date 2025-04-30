import { TestClass } from "./addMethodParam_exportDeclare_privateStaticAsync_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
