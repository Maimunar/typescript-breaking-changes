import { TestClass } from "./changeState_export_privateStaticAsync_To_abstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
