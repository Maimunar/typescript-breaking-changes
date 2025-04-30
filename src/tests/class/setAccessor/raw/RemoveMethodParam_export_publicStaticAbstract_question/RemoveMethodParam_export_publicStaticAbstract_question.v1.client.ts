import { TestClass } from "./RemoveMethodParam_export_publicStaticAbstract_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod(1);
