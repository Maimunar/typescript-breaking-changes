import TestClass from "./addMethodParam_exportDefault_privateStaticAsync_question.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
