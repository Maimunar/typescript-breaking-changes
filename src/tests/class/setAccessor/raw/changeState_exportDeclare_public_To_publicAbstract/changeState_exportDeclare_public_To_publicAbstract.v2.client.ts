import { TestClass } from "./changeState_exportDeclare_public_To_publicAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
