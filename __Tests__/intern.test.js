const Intern = require ("../lib/Intern");

describe("Intern",() => {

    describe ("initialization", () => {
            //Arrange
            //Act
            let newIntern = new Intern("Seb", 1, "SebTx@gmail.com", "Harvard");
            //Assert
            console.log(newIntern)
            expect(newIntern.name).toEqual("Seb");
            expect(newIntern.id).toEqual(1);
            expect(newIntern.email).toEqual("SebTx@gmail.com");
            expect(newIntern.school).toEqual("Harvard");

        })

        describe("getSchool", ()=>{
        
            it('should return the school the intern is attending', () => {
                let newIntern = new Intern("Seb", 1, "SebTx@gmail.com", "Harvard")
                expect (newIntern.getSchool()).toEqual("Harvard");
            });
        
        
        
        })
        
        describe("getRole", ()=>{
        
            it('should return the employees Role', () => {
                let newIntern = new Intern("Seb", 1, "SebTx@gmail.com", "Harvard")
                expect (newIntern.getRole()).toEqual("Intern");
            });
        
        
        
        })
        

})

    