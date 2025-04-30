import { TestClass } from "./changeState_exportDeclare_publicStaticAbstractAsync_To_protectedAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
