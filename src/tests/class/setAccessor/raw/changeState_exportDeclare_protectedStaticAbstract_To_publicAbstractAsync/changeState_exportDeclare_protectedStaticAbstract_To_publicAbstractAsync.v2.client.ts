import { TestClass } from "./changeState_exportDeclare_protectedStaticAbstract_To_publicAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
