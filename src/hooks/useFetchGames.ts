import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
}

export interface FetchGameResponse {
  count: number;
  results: Game[];
}

export default function useFetchGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const controller = new AbortController();
    apiClient.get<FetchGameResponse>("/games", { signal: controller.signal })
      .then(res => setGames(res.data.results))
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err.message);
      })

    return () => {
      controller.abort();
    }
  }, []);
  
  return { games, error };
}