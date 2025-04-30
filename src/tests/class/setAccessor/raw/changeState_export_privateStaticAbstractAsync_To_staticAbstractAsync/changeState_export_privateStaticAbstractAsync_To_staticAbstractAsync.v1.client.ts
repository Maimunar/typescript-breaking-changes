import { TestClass } from "./changeState_export_privateStaticAbstractAsync_To_staticAbstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
