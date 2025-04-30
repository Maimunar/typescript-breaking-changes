import { TestClass } from "./changeState_exportDeclare_publicAbstract_To_protected.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
