import { render,screen } from "@testing-library/react";
import CardCom from "../CardCom";
import CARD_MOCK_DATA from "./MOCKS/RestroCardMocks.json";
import "@testing-library/jest-dom";
describe("Card Component Test Cases",()=>{

    it("should render the Card Component with it properties",()=>{

        //1.render the component on to the jsdom environment

        render(<CardCom resData={CARD_MOCK_DATA}/>);

        // console.log(CARD_MOCK_DATA)


        //2.query 

        // const name=screen.getByText("Pizza Paradise")

        const name = screen.getByText("Pizza Paradise");

        // //3.Assertion
        expect(name).toBeInTheDocument();

    })
})