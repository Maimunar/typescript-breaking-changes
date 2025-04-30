import { TestClass } from "./changeState_exportDeclare_protectedStatic_To_privateAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
