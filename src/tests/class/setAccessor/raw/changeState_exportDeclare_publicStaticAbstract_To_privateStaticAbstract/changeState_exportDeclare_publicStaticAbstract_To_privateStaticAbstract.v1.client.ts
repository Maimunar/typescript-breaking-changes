import { TestClass } from "./changeState_exportDeclare_publicStaticAbstract_To_privateStaticAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
