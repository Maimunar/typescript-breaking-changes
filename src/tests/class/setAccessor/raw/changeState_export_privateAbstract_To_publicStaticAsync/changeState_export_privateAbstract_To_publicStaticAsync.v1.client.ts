import { TestClass } from "./changeState_export_privateAbstract_To_publicStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
