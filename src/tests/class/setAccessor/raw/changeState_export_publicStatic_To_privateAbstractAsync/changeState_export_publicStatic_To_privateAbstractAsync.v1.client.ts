import { TestClass } from "./changeState_export_publicStatic_To_privateAbstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
