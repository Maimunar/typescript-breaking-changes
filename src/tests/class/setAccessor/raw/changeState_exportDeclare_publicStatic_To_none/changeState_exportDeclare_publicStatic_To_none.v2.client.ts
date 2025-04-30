import { TestClass } from "./changeState_exportDeclare_publicStatic_To_none.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
