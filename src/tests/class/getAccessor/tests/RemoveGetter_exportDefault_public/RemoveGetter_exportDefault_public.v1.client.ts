import TestClass from "./RemoveGetter_exportDefault_public.v1";

class TestClassChild extends TestClass { }
const testClass = new TestClass();
const res = testClass.testGetter;
