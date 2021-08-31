import { Choice } from "../components/Choice";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tests the Choice Component", () => {
    test("Renders Properly", () => {
        render(<Choice name="rock"/>)
    })
    test("Runs decidePlayerChoice and toggleGame when clicked", () => {
        const toggleMock = jest.fn()
        const choiceMock = jest.fn()
        const { getByTestId } = render(<Choice 
            name="rock"
            decidePlayerChoice={choiceMock}
            toggleGame={toggleMock}
        />)
        const button = getByTestId("choice-btn")
        userEvent.click(button)
        expect(toggleMock.mock.calls).toHaveLength(1)
        expect(choiceMock.mock.calls).toHaveLength(1)
    })
})