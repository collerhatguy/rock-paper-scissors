import { Header } from "../components/Header";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Header tests", () => {
    test("Renders properly", () => {
        render(<Header/>)
    })
    test("Displays given score", () => {
        const { getByTestId } = render(<Header score={29}/>)
        const scoreContainer = getByTestId("score-container")
        expect(scoreContainer).toBeInTheDocument()
        expect(scoreContainer).toHaveTextContent(/29/i)
    })
})