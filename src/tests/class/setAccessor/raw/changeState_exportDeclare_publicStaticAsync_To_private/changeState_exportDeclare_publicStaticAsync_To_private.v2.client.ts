import { TestClass } from "./changeState_exportDeclare_publicStaticAsync_To_private.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
