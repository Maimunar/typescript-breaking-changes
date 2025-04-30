import { TestClass } from "./changeState_export_protectedAsync_To_protectedAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
