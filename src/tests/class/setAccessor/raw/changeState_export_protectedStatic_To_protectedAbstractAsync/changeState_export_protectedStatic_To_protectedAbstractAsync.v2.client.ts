import { TestClass } from "./changeState_export_protectedStatic_To_protectedAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
