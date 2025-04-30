import { TestClass } from "./changeState_exportDeclare_staticAbstract_To_protectedStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
