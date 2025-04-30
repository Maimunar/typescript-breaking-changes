import { TestClass } from "./RemoveMethodParam_exportDeclare_none_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
