import { TestClass } from "./addMethod_SameName_exportDeclare_publicAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
