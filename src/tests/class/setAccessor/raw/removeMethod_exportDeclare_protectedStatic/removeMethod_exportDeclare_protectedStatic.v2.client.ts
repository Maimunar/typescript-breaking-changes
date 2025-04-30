import { TestClass } from "./removeMethod_exportDeclare_protectedStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
