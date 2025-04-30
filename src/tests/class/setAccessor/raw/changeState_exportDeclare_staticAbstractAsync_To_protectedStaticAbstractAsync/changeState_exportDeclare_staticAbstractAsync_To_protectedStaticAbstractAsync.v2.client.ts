import { TestClass } from "./changeState_exportDeclare_staticAbstractAsync_To_protectedStaticAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
