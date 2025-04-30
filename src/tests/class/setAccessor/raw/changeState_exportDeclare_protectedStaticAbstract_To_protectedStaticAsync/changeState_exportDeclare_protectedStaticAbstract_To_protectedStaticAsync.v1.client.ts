import { TestClass } from "./changeState_exportDeclare_protectedStaticAbstract_To_protectedStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
