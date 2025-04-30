import { TestClass } from "./changeState_exportDeclare_protectedStaticAbstractAsync_To_privateAbstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
