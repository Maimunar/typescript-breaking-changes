import { TestClass } from "./RemoveMethodParam_exportDeclare_protectedStaticAbstract_none.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod(1);
