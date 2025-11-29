import Contect from "../Contect";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"


describe("contect Us Page Test Cases",()=>{

    test("contect page should be rendered",() => {
   

        //whenever you are testing UI component inside react app you will have to render that component on to the jsdom so use render() method to render on to the jsdom
        render(<Contect />)
      
        //bacically there are different types of  role in html document like heading,button,link etc 
        //jest will search for the element on the basis of role and name of the element 
       const heading =  screen.getByRole("heading",{
            name:"Contect Page",
            level:1
        })
    
        expect(heading).toBeInTheDocument()
    
    
    
    })
    
    test("submit button should be rendered",() => {
       
    
        render(<Contect />)
      
        
        
        const button = screen.getByText("Submit")
       
        expect(button).toBeInTheDocument()
    
    
    
    })
    
    
    it("shold load input field of contact number ",() => {
       
    
        render(<Contect />)
      
        
         //quring the input field
        const input = screen.getByPlaceholderText("Enter contact number")
    
    
        // console.log(input) // single object => which is react element (virtual dom)
        //console.log(typeof input) // object=> which is react element (virtual dom)
       
        expect(input).toBeInTheDocument()
    
    
    
    })
    
    it("shuld have 2 input fields",() => {
    
        //render the component on to the jsdom environment
        render(<Contect />);
    
        //we have to query
    
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        // console.log(inputBoxes); //array of objects => react elements (virtual dom) 
        // console.log(inputBoxes.length);
        
        //Assertion
        expect(inputBoxes).toHaveLength(2);
        // expect(inputBoxes.length).toBe(2);
        // expect(inputBoxes.length).not.toBe(3);
    })

})


