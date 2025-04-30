import { TestClass } from "./changeState_exportDeclare_privateAsync_To_publicAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
