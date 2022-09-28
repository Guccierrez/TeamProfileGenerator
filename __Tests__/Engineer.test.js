const Engineer = require ("../lib/Engineer");

describe("Engineer",() => {

    describe ("initialization", () => {
            //Arrange
            //Act
            let newEngineer = new Engineer("Seb", 1, "SebTx@gmail.com", "github.com/Seb");
            //Assert
            console.log(newEngineer)
            expect(newEngineer.name).toEqual("Seb");
            expect(newEngineer.id).toEqual(1);
            expect(newEngineer.email).toEqual("SebTx@gmail.com");
            expect(newEngineer.github).toEqual("github.com/Seb");




    })


    describe("getGithub", ()=>{

        it('should return github username', () => {
            let newEngineer = new Engineer("Seb", 1, "SebTx@gmail.com", "github.com/Seb")
            expect (newEngineer.getGithub()).toEqual("github.com/Seb");
        });



    })

    describe("getRole", ()=>{
        
        
        it('should return Engineer when asked what the role is', () => {
            let newEngineer = new Engineer("Seb", 1, "SebTx@gmail.com", "github.com/Seb")
            expect (newEngineer.getRole()).toEqual("Engineer");
        });


    })

})