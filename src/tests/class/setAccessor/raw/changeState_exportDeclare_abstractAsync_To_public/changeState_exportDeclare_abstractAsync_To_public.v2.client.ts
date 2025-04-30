import { TestClass } from "./changeState_exportDeclare_abstractAsync_To_public.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
