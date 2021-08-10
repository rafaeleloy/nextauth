import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then(response => { })
      .catch(() => { });
  }, []);

  return (
    <h1>Dashboard</h1>
  )
}