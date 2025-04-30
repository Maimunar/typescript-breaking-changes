import { TestClass } from "./addMethodParam_exportDeclare_privateAsync_dotdotdot.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
