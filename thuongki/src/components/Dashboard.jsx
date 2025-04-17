import { useEffect, useState } from "react";


export default function Dashboard() {

const [overview, setOverview] = useState({
    turnover: null,
    profit: null,
    customers: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [turnoverRes, profitRes, customersRes] = await Promise.all([
          fetch("http://localhost:3001/turnover"),
          fetch("http://localhost:3001/profit"),
          fetch("http://localhost:3001/customers"),
        ]);

        const [turnover, profit, customers] = await Promise.all([
          turnoverRes.json(),
          profitRes.json(),
          customersRes.json(),
        ]);

        setOverview({
           turnover: turnover[0],
           profit: profit[0],
           customers: customers[0],
          });
      } catch (err) {
        console.error("API error:", err);
      }
    };

    fetchData();
  }, []);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3001/users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
  
    fetchUsers();
  }, []);
  

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold mb-6 text-pink-600">Logo</div>
          <nav className="space-y-3">
            <a href="#" className="flex items-center p-2 rounded-lg bg-pink-100 text-pink-600 font-semibold">
              <span className="ml-2">Dashboard</span>
            </a>
            <a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <span className="ml-2">Projects</span>
            </a>
            <a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <span className="ml-2">Teams</span>
            </a>
            <a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <span className="ml-2">Analytics</span>
            </a>
            <a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <span className="ml-2">Messages</span>
            </a>
            <a href="#" className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
              <span className="ml-2">Integrations</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-pink-600">Dashboard</h1>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-md border border-gray-300"
            />
            <button>🔔</button>
            <button>❓</button>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-5 rounded-lg shadow">
            <p className="text-gray-500">Turnover</p>
            <h2 className="text-2xl font-bold">
                {overview.turnover ? `${overview.turnover.value} USD` : "Loading..."}
            </h2>
            <p className="text-green-500 text-sm">
              ▲ {overview.turnover?.change}% period of change
            </p>

          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <p className="text-gray-500">Profit</p>
            <h2 className="text-2xl font-bold">
              {overview.profit ? `${overview.profit.value} USD` : "Loading..."}
            </h2>
            <p className="text-green-500 text-sm">
              ▲ {overview.profit?.change}% period of change
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <p className="text-gray-500">New customers</p>
            <h2 className="text-2xl font-bold">
              {overview.customers ? `${overview.customers.value}` : "Loading..."}
            </h2>
            <p className="text-green-500 text-sm">
              ▲ {overview.customers?.change}% period of change
            </p>
  </div>
</div>
  
          {/* Detailed Report Table */}
          <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Detailed Report</h3>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Customer Name</th>
                <th>Company</th>
                <th>Order Value</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-2">{user.name}</td>
                  <td>{user.company}</td>
                  <td>{user.orderValue}</td>
                  <td>{user.orderDate}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.status === "New"
                          ? "bg-blue-100 text-blue-600"
                          : user.status === "In-progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </main>
      </div>
    );
  }
  