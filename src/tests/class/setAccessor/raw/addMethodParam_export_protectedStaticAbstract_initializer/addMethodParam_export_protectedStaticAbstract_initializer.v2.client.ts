import { TestClass } from "./addMethodParam_export_protectedStaticAbstract_initializer.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
