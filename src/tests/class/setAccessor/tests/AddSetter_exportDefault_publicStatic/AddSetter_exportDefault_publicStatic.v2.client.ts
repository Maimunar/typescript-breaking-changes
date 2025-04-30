import TestClass from "./AddSetter_exportDefault_publicStatic.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
