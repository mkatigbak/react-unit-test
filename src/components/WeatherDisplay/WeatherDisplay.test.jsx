import React from 'react'
import { render, screen } from '@testing-library/react'
import WeatherDisplay from './WeatherDisplay'

describe('WeatherDisplay', () => {
    it('renders city, temperature, and weather', () => {
        const testData = {
            city: 'Test City',
            temperature: '20°C',
            weather: 'Cloudy'
        }
        
        render(<WeatherDisplay {...testData} />)
        
        expect(screen.getByText(testData.city)).toBeInTheDocument()
        expect(screen.getByText(`${testData.temperature} - ${testData.weather}`))
            .toBeInTheDocument()
    })
})