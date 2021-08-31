import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OutcomeDeclaration } from "../components/OutcomeDeclaration";
import "@testing-library/jest-dom/extend-expect"

describe("Outcome Declaration testing", () => {
    test("Renders Properly", () => {
        render(<OutcomeDeclaration/>)
    })
    test("Runs toggleGame when Button is clicked", () => {
        const toggleMock = jest.fn()
        const { getByTestId } = render(<OutcomeDeclaration toggleGame={toggleMock}/>)
        const button = getByTestId("toggle-btn")
        userEvent.click(button)
        expect(toggleMock.mock.calls).toHaveLength(1)
    })
    test("Shows given outcome", () => {
        const { getByTestId } = render(<OutcomeDeclaration outcome="the outcome"/>)
        const outcomeHeader = getByTestId("outcome")
        expect(outcomeHeader).toBeInTheDocument()
        expect(outcomeHeader).toHaveTextContent(/the outcome/i)
    })
})