import React from 'react'
import { StatCards } from './StatCards'
import { DiagnosisChart } from './DiagnosisChart'
import MonthlyOverviewChart from './MonthlyOverviewChart'

export const Main_Grid = () => {
  return (
    <div className='px-6 py-2 grid gap-6 grid-cols-12'>
        <StatCards/> 
        <MonthlyOverviewChart/>
        <DiagnosisChart/>
    </div>
  )
}
