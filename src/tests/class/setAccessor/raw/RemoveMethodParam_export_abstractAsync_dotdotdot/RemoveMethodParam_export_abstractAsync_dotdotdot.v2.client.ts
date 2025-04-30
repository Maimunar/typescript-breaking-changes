import { TestClass } from "./RemoveMethodParam_export_abstractAsync_dotdotdot.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
