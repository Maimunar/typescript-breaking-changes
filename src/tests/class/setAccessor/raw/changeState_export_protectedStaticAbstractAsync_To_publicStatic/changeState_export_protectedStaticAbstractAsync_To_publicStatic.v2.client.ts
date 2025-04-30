import { TestClass } from "./changeState_export_protectedStaticAbstractAsync_To_publicStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
