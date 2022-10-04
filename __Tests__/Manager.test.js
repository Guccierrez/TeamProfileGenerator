const Manager = require ("../lib/Manager");

describe("Manager",() => {

    describe ("initialization", () => {
            //Arrange
            //Act
            let newManager = new Manager("Seb", 1, "SebTx@gmail.com", 100);
            //Assert
            console.log(newManager)
            expect(newManager.name).toEqual("Seb");
            expect(newManager.id).toEqual(1);
            expect(newManager.email).toEqual("SebTx@gmail.com");
            expect(newManager.officeNumber).toEqual(100);

        })

        describe("getOfficeNumber", ()=>{
        
            it('should return the school the intern is attending', () => {
                let newManager = new Manager("Seb", 1, "SebTx@gmail.com", 100)
                expect (newManager.getOfficeNumber()).toEqual(100);
            });
        
        
        
        })
        
        describe("getRole", ()=>{
        
            it('should return the employees Role', () => {
                let newManager = new Manager("Seb", 1, "SebTx@gmail.com", 100)
                expect (newManager.getRole()).toEqual("Manager");
            });
        

        
        })
        

})

    