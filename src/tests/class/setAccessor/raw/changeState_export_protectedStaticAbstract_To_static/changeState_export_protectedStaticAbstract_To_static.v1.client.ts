import { TestClass } from "./changeState_export_protectedStaticAbstract_To_static.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
