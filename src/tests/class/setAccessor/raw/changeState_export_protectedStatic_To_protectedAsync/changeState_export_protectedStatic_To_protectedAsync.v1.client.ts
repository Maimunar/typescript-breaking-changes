import { TestClass } from "./changeState_export_protectedStatic_To_protectedAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
