import { TestClass } from "./changeState_export_abstractAsync_To_protectedStaticAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
