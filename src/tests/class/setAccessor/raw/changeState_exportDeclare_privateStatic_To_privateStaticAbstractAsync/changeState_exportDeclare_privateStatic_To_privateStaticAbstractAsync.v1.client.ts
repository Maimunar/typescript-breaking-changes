import { TestClass } from "./changeState_exportDeclare_privateStatic_To_privateStaticAbstractAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
