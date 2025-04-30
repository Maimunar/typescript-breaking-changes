import { TestClass } from "./changeState_exportDeclare_staticAsync_To_publicStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
