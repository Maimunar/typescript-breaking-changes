import { TestClass } from "./addMethod_SameName_export_privateStaticAsync.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
