import { TestClass } from "./removeMethod_exportDeclare_publicAbstract.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
