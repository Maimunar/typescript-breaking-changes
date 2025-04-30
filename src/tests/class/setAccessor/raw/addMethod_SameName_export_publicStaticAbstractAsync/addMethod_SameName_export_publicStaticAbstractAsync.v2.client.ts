import { TestClass } from "./addMethod_SameName_export_publicStaticAbstractAsync.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testMethod();
