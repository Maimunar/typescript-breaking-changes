import { TestClass } from "./changeState_exportDeclare_none_To_protected.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
