import { TestClass } from "./RemoveSetter_exportDeclare_publicStatic.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testSetter = 1;
TestClassChild.testSetter = 1;
