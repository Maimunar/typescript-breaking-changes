import { TestClass } from "./changeState_export_privateStaticAsync_To_publicStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
