import { TestClass } from "./changeState_exportDeclare_privateAbstractAsync_To_privateStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
