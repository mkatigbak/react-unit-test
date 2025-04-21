import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import locationsData from './locations.json'

describe('App', () => {
    it('displays all locations initially', () => {
        render(<App />)
        
        locationsData.forEach(location => {
            expect(screen.getByText(location.city)).toBeInTheDocument()
        })
    })

    it('filters locations based on search input', () => {
        render(<App />)
        
        fireEvent.change(screen.getByPlaceholderText('Search for a city...'), {
            target: { value: 'San' }
        })
        
        expect(screen.getByText('San Francisco')).toBeInTheDocument()
        expect(screen.queryByText('New York')).not.toBeInTheDocument()
    })
})