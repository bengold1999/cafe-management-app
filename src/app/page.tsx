import Layout from './layout'
import Link from 'next/link'

const IndexPage = () => (
  <>
    <h1>ברוכים הבאים למערכת ניהול העובדים</h1>
    <nav>
      <Link href="/pages/employee">
        כניסה לעובדים
      </Link>
      <Link href="/pages/admin">
        כניסה למנהלים
    </Link>
  </nav>
  </>
)

export default IndexPage