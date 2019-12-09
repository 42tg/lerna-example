import Bla from "@pcweb/bla"

export default class Blubb {
    public bla = new Bla()
    public hello() {
        this.bla.tester()
        this.bla.subClass.echo()
        console.log("Hello")
    }
}
