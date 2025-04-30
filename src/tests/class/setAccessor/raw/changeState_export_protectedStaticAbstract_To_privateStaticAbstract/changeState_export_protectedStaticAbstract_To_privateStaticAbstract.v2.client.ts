import { TestClass } from "./changeState_export_protectedStaticAbstract_To_privateStaticAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
