import { TestClass } from "./addMethodParam_export_publicStaticAbstract_dotdotdot.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
