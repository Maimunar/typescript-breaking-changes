import { TestClass } from "./changeState_exportDeclare_protectedAbstract_To_publicStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
