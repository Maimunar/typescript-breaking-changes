import { TestClass } from "./addMethod_SameName_exportDeclare_protectedStaticAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
