import { render, screen, fireEvent } from '@testing-library/react';
import Header from "../components/Header";

describe('Header component test suite', () => {
    beforeEach(() => {
        render(
            <Header />
        );
    })

    test("should render header component correctly", () => {

        expect(screen.getByText("The Recipe Collective")).toBeInTheDocument();
    });

    test("should have two buttons", () => {
        expect(screen.getAllByRole("button").length).toBe(2);
    })
})
