import { TestClass } from "./RemoveMethodParam_export_none_dotdotdot.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod(1);
