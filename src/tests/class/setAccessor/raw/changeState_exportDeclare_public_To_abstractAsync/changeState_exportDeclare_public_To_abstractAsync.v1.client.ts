import { TestClass } from "./changeState_exportDeclare_public_To_abstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
