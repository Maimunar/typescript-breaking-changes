import TestClass from "./addMethodParam_exportDefault_privateStaticAbstractAsync_dotdotdot.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
