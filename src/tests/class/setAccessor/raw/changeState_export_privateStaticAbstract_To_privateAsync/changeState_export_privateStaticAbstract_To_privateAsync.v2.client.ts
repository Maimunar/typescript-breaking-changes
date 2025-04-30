import { TestClass } from "./changeState_export_privateStaticAbstract_To_privateAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
