import TestClass from "./RemoveMethodParam_exportDefault_privateStatic_dotdotdot.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod(1);
