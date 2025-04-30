import { TestClass } from "./changeState_export_staticAbstract_To_async.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
