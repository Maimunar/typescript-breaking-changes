import { TestClass } from "./RemoveMethodParam_exportDeclare_privateAbstract_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
