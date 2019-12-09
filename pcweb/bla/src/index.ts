import Subclass from "./sub"

export default class Test {
    private test: string = "TEST"
    public subClass = new Subclass()
    public tester() {
        return this.test
    }
}
