import { TestClass } from "./changeState_exportDeclare_protectedAbstract_To_staticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
