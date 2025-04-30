import { TestClass } from "./changeState_export_protectedStaticAbstractAsync_To_none.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
