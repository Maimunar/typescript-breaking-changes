import TestClass from "./changeState_exportDefault_publicAbstract_To_staticAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
