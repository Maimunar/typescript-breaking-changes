import { TestClass } from "./changeState_exportDeclare_privateAbstract_To_protectedAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
