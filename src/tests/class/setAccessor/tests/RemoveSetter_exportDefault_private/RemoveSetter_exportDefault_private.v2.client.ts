import TestClass from "./RemoveSetter_exportDefault_private.v2";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const testClassChild = new TestClassChild();
