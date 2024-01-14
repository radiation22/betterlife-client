import React, { useEffect, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <VisitCounter />
    </div>
  );
}

function VisitCounter() {
  const [visits, setVisits] = useState(50);

  // Loading from the server
  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visits");
        const data = await response.json();
        setVisits(data.count);
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    fetchVisits();
  }, []);

  // Saving to the server
  useEffect(() => {
    const incrementVisit = async () => {
      try {
        await fetch("http://localhost:5000/api/visits/increment", {
          method: "POST",
        });
      } catch (error) {
        console.error("Error incrementing visit count:", error);
      }
    };

    incrementVisit();
  }, []); // Empty dependency array ensures this effect runs only on mount

  return <p>{visits}</p>;
}
