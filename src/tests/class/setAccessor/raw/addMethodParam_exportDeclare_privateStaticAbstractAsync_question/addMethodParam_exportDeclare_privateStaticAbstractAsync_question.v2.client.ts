import { TestClass } from "./addMethodParam_exportDeclare_privateStaticAbstractAsync_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
