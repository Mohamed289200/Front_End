import React from 'react'
import { AddDiseaseForm } from './AddDiseaseForm'

export const Diseases = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
      <div className='border-b mb-2 pb-4 border-gray-200 col-span-12'>
        <h1 className='font-semibold block text-3xl'>
          Diseases
        </h1>
      </div>
        <AddDiseaseForm token={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2NhMzRlMGYyZDZlMWYzOWQzZTE3NTkiLCJuYW1lIjoidGFzbmVlbSIsInJvbGUiOiJkb2N0b3IiLCJpYXQiOjE3NDEzMDUyOTQsImV4cCI6MTc0MTMxOTY5NH0.OH9MPc9snk65t9f6hZobyqBqZJ7lawHViXWlNISunK8"}/>
    </div>
  )
}
