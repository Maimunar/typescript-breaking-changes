import TestClass from "./changeState_exportDefault_privateStatic_To_public.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
TestClass.testMethod();
