import TestClass from "./RemoveMethodParam_exportDefault_privateStaticAbstractAsync_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
