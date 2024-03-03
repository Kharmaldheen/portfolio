import { useEffect, useState } from "react";
import { getProjects } from "./apiProjects";

export function useProjects() {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        setIsLoading(true);
        const projectsFromApi = await getProjects();
        setProjects(projectsFromApi);

        setError("");
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  return { projects, isLoading, error };
}
