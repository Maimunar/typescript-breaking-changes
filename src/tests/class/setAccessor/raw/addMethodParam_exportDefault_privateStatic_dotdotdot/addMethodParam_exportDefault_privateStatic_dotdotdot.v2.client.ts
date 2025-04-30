import TestClass from "./addMethodParam_exportDefault_privateStatic_dotdotdot.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
