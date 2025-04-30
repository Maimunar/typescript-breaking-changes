import { TestClass } from "./removeMethod_exportDeclare_protectedAbstract.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
