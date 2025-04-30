import { TestClass } from "./RemoveMethodParam_exportDeclare_privateStaticAbstract_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod(1);
