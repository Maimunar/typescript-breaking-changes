import { TestClass } from "./changeState_exportDeclare_publicAsync_To_publicStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
