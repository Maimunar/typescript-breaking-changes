import TestClass from "./RemoveMethodParam_exportDefault_protectedStaticAbstract_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod(1);
