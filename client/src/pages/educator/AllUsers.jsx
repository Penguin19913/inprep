import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const AllUsers = () => {
  const { backendUrl, getToken } = useContext(AppContext);
  const [users, setUsers] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/educator/all-users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setUsers(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return users ? (
    <div className="min-h-screen flex flex-col items-start justify-between md:p-8 p-2 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">All Users</h2>
        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="flex flex-col max-w-3xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
            <table className="table-auto w-full overflow-hidden">
              <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">User ID</th>
                  <th className="px-4 py-3 font-semibold truncate">Gmail</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {users.map((user) => (
                  <tr key={user._id} className="border-b border-gray-500/20">
                    <td className="px-4 py-3">{user._id}</td>
                    <td className="px-4 py-3">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4 mt-2">
          {users.map((user) => (
            <div key={user._id} className="bg-white rounded-lg shadow border border-gray-200 p-4 flex flex-col gap-2">
              <div className="font-semibold text-base text-gray-800">ID: {user._id}</div>
              <div className="text-sm text-gray-500">Gmail: {user.email}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default AllUsers;