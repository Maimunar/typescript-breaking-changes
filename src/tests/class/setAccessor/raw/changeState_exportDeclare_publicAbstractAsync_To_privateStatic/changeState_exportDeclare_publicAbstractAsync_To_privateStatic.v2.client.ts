import { TestClass } from "./changeState_exportDeclare_publicAbstractAsync_To_privateStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
