import { TestClass } from "./changeState_exportDeclare_privateStaticAbstract_To_protectedAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
