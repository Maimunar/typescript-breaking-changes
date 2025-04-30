import { TestClass } from "./addMethodParam_export_protectedAbstract_initializer.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
