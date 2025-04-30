import { TestClass } from "./changeState_exportDeclare_protectedStaticAsync_To_privateStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
