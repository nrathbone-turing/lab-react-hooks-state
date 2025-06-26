import { render, screen } from '@testing-library/react'
import App from '../App'
import { toBeInTheDocument } from "@testing-library/jest-dom"

const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Bread', price: '$3.00', category: 'Bakery', inStock: true },
]

test('renders shopping app', () => {
    render(<App />)
    expect(screen.getByText(/Shopping App/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
    render(<App />)
    sampleProducts.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument()
    })
})

test('shows "No products available" when filtering removes all products', () => {
    render(<App />)
    const filterDropdown = screen.getByRole('combobox')
    filterDropdown.value = 'Non-Existent Category'
    expect(screen.getByText(/No products available/i)).toBeInTheDocument()
})
