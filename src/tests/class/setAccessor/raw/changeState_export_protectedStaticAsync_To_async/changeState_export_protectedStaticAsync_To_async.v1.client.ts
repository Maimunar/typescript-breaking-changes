import { TestClass } from "./changeState_export_protectedStaticAsync_To_async.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
