import { Game } from "../components/Game";
import ChoiceContainer from "../components/ChoiceContainer";
import ChoiceReveal from "../components/ChoiceReveal";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";  

jest.mock("../components/ChoiceContainer")
jest.mock("../components/ChoiceReveal")

describe("Game component test", () => {
    test("renders properly", () => {
        render(<Game/>)
    })
    test("renders proper components based on props", () => {
        ChoiceContainer.mockImplementationOnce(() => <h2 data-testid="choice-container"></h2>)
        ChoiceReveal.mockImplementationOnce(() => <h2 data-testid="choice-reveal"></h2>)
        
        const { queryByTestId } = render(<Game gameStart={true}/>)
        const ChcReveal = queryByTestId("choice-reveal")
        const ChcContainer = queryByTestId("choice-container")
        expect(ChcReveal).toBeInTheDocument()  
        expect(ChcContainer).not.toBeInTheDocument()
    })
})