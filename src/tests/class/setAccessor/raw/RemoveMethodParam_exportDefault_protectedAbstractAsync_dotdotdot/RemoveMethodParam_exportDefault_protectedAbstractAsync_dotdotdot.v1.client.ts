import TestClass from "./RemoveMethodParam_exportDefault_protectedAbstractAsync_dotdotdot.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
