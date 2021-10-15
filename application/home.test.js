const rewire = require("rewire")
const home = rewire("./home")
const HomePage = home.__get__("HomePage")

const mapStateToProps = home.__get__("mapStateToProps")
// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[56784, 56784, "a1969970175"], [12345, 56784, 12345], ["a1969970175", 12345, 12345]]
        inst = new HomePage(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ root: { currentUser: "user_name", users: 123, errorMessage: "An error occurred processing your request.", isError: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ root: { currentUser: "user name", users: "user name", errorMessage: "Sorry, This video cannot be accessed via this website", isError: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ root: { currentUser: "username", users: "user name", errorMessage: "Could not find an existing submission in location.  rubric is original.", isError: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ root: { currentUser: "user name", users: "user123", errorMessage: "This is an exception, voilà", isError: false } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ root: { currentUser: "user name", users: "username", errorMessage: "Error selecting from database", isError: true } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
