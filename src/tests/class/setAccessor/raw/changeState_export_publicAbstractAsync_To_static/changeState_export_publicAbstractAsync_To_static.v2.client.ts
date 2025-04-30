import { TestClass } from "./changeState_export_publicAbstractAsync_To_static.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
