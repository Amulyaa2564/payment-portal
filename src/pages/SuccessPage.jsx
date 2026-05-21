import { useNavigate } from "react-router-dom";

export default function SuccessPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">

      <div className="bg-white p-10 rounded-lg shadow-sm border text-center">

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Your subscription has been activated successfully.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  )
}