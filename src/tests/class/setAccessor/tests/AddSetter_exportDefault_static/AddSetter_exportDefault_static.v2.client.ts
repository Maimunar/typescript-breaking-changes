import TestClass from "./AddSetter_exportDefault_static.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
