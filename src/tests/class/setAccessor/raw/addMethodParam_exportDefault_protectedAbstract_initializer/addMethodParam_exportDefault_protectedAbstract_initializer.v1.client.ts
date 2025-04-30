import TestClass from "./addMethodParam_exportDefault_protectedAbstract_initializer.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
