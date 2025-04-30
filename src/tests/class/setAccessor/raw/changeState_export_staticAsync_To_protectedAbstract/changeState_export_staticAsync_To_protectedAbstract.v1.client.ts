import { TestClass } from "./changeState_export_staticAsync_To_protectedAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
