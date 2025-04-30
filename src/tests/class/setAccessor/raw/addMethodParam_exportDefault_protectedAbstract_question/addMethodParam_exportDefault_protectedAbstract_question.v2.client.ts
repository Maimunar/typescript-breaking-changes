import TestClass from "./addMethodParam_exportDefault_protectedAbstract_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
