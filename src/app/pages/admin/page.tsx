// pages/admin/index.tsx
'use client'
import { useEffect, useState } from 'react'
import Layout from '../../layout'
import axios from 'axios'

const AdminDashboard = () => {
  const [activeEmployees, setActiveEmployees] = useState(0)
  const [monthlyReport, setMonthlyReport] = useState(null)

  useEffect(() => {
    const fetchActiveEmployees = async () => {
      const response = await axios.get('/api/employees/active')
      setActiveEmployees(response.data.count)
    }

    fetchActiveEmployees()
    const interval = setInterval(fetchActiveEmployees, 60000) // update every minute

    return () => clearInterval(interval)
  }, [])

  const generateMonthlyReport = async () => {
    const response = await axios.get('/api/reports/monthly')
    setMonthlyReport(response.data)
  }

  return (
    <Layout title="דשבורד מנהלים">
      <h1>דשבורד מנהלים</h1>
      <p>עובדים פעילים כרגע: {activeEmployees}</p>
      <button onClick={generateMonthlyReport}>הפקת דוח חודשי</button>
      {monthlyReport && (
        <div>
          {/* Display monthly report here */}
        </div>
      )}
    </Layout>
  )
}

export default AdminDashboard