import { TestClass } from "./changeState_exportDeclare_abstractAsync_To_static.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
