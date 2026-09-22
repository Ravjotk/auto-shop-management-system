import './App.css'

function App() {
  return (
    <div>
      <nav className="sidebar">
  <h2>Akal Auto</h2>
  <p>Dashboard</p>
  <p>Customers</p>
  <p>Vehicles</p>
  <p>Repair Orders</p>
  <p>Invoices</p>
  <p>Employees</p>
  <p>Finances</p>
</nav>g
      <h1>Auto Shop Management System</h1>

      <h2>Dashboard</h2>
      <p>Welcome to your auto shop dashboard!</p>

      <h3>Today's Overview</h3>

      <ul className="dashboard-grid">
        <li>Vehicles in Shop: 0</li>
        <li>Completed Repairs: 0</li>
        <li>Outstanding Invoices: 0</li>
        <li>Today's Revenue: $0.00</li>
      </ul>
    </div>
  )
}

export default App