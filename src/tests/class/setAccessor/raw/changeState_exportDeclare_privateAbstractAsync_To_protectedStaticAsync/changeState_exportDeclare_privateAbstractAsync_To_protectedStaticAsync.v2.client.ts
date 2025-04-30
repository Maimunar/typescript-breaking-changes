import { TestClass } from "./changeState_exportDeclare_privateAbstractAsync_To_protectedStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
