const Employee = require("../lib/Employee");

describe('Employee',()=>{

    describe("intialization", () => {
        
        it("should get initialized correctly", () => {
            //Arrange
            //Act
            let newEmployee = new Employee("Gucci", 1, "fabian@gmail.com");
            //Assert
            //console.log(newEmployee)
            expect(newEmployee.name).toEqual("Gucci");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("fabian@gmail.com");
        });
        
        
    });
    
    describe("getName", () =>{
        
        it('should return the name I give it,upon initiation', () => {
            let name = "Gucci"
            let newEmployee = new Employee("Gucci", 1, "fabiangutierrez580@gmail.com");
            
            expect(newEmployee.getName()).toEqual(name);

        });
        
        
    })

    describe("getId", () =>{
        
        it('should the ID number I give it', () => {
            let id = 10000
            let newEmployee = new Employee("Gucci", 10000, "fabiangutierrez580@gmail.com");
            
            expect(newEmployee.getId()).toEqual(id);
        });
        
       

    })



    
    describe("getRole", () =>{
        it('should return their role in the company', () => {
            let role = "Employee"
            let newEmployee = new Employee("Gucci", 10000, "fabiangutierrez580@gmail.com");
            
            expect(newEmployee.getRole()).toEqual(role);
        });

    })


    });