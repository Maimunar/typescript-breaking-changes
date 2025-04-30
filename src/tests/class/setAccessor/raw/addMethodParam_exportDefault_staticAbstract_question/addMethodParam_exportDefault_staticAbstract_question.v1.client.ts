import TestClass from "./addMethodParam_exportDefault_staticAbstract_question.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
