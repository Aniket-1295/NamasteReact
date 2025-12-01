import { render,screen,fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

import { BrowserRouter } from "react-router-dom";


describe("Header Component Test Cases",()=>{


    it("should render the header component with login button",()=>{

        //1.render the component on to the jsdom environment

        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
        )

        //query 
        //check if the element is present in the document

        const loginButton = screen.getByRole("button",{
            name:"Login"
        })

        //Assertion 

        expect(loginButton).toBeInTheDocument();
       
        
    })

    it("shoult render the header component with cart item count",()=>{

        //1.render the component on to the jsdom environment

        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
        )

        //query 
        //check if the element is present in the document
        const cartItemCount = screen.getByText(/Cart/);

        //Assertion
        expect(cartItemCount).toBeInTheDocument();
    })

    it("should change login button to logout button",()=>{

        //1.render the component on to the jsdom environment

        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
            </BrowserRouter>
        )


        //query 

        const loginButton = screen.getByRole("button",{
            name:"Login"
        })

        fireEvent.click(loginButton);

        const logoutButton = screen.getByRole("button",{
            name:"Logout"
        })

        //Assertion
        expect(logoutButton).toBeInTheDocument();


    })







    








})