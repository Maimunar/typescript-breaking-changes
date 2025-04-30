import { TestClass } from "./RemoveSetter_exportDeclare_public.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testSetter = 1;
testClassChild.testSetter = 1;
