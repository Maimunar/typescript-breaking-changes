import { TestClass } from "./changeState_exportDeclare_privateAsync_To_publicStaticAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
