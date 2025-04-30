import TestClass from "./AddSetter_exportDefault_protected.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
