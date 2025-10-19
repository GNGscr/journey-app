"use client";
import { useEffect, useState, useCallback } from "react";
import * as basicJourneyData from "@/app/data/journeyData.json";
import { JourneyData } from "../constants/types";

const useJourneyData = ({ url }: { url: string }) => {
    const defaultJourneyData: JourneyData = basicJourneyData;

    const [journeyData, setJourneyData] = useState<JourneyData>(defaultJourneyData);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const res = await fetch(url, { cache: "no-store" });

            if (!res.ok) {
                throw new Error("Failed to fetch journey data");
            }

            const data = await res.json();
            setJourneyData(data);
        } catch (err) {
            console.error("Error fetching journey data:", err);
            setError(err instanceof Error ? err.message : "Failed to load data");
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { journeyData, isLoading, error };
};

export default useJourneyData;
