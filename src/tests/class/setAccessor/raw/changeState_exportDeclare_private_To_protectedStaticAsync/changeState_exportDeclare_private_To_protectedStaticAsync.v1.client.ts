import { TestClass } from "./changeState_exportDeclare_private_To_protectedStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
