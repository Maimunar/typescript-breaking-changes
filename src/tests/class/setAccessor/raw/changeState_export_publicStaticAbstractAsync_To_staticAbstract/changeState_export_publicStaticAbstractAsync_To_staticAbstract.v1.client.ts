import { TestClass } from "./changeState_export_publicStaticAbstractAsync_To_staticAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
