import { TestClass } from "./changeState_export_abstract_To_privateStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
