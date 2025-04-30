import TestClass from "./changeState_exportDefault_To_exportDeclareAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
testClass.testMethod();
