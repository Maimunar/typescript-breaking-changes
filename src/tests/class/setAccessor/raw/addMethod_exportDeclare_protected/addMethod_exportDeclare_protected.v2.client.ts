import { TestClass } from "./addMethod_exportDeclare_protected.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
