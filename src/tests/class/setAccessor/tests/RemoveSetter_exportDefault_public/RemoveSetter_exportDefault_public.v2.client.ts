import TestClass from "./RemoveSetter_exportDefault_public.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
testClass.testSetter = 1;
testClassChild.testSetter = 1;
