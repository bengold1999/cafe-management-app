'use client'
import { useState } from 'react'
import Layout from '../../layout'
import axios from 'axios'

const EmployeeDashboard = () => {
  const [isWorking, setIsWorking] = useState(false)

  const handleClockIn = async () => {
    try {
      await axios.post('/api/shifts/start')
      setIsWorking(true)
    } catch (error) {
      console.error('Error starting shift:', error)
    }
  }

  const handleClockOut = async () => {
    try {
      await axios.post('/api/shifts/end')
      setIsWorking(false)
    } catch (error) {
      console.error('Error ending shift:', error)
    }
  }

  return (
    <Layout title="דשבורד עובדים">
      <h1>דשבורד עובדים</h1>
      {isWorking ? (
        <button onClick={handleClockOut}>סיום משמרת</button>
      ) : (
        <button onClick={handleClockIn}>התחלת משמרת</button>
      )}
    </Layout>
  )
}

export default EmployeeDashboard
