import { useEffect, useState } from "react";
import Tour from "./Tour";
function App() {
  const [loading, setLoading] = useState(false);
  const [tour, setTour] = useState([]);

  const getTour = async () => {
    setLoading(true);
    try {
      let response = await fetch("https://course-api.com/react-tours-project");
      let result = await response.json();
      setTour(result);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const removeTour = (selectedId) => {
    let newData = tour.filter((item) => selectedId != item.id);
    setTour(newData);
  };

  useEffect(() => {
    getTour();
  }, []);

  //loading
  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  //if no data left
  if (!loading && tour.length == 0) {
    return (
      <div className="no__more__tour">
        <div className="no__more__tour1">
          <h1>No More Tour Left</h1>
        </div>
        <div className="no__more__tour1">
          <button className="refresh_btn" onClick={getTour}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      <section>
        {tour &&
          tour.map((item) => {
            return <Tour key={item.id} item={item} removeTour={removeTour} />;
          })}
      </section>
    </div>
  );
}

export default App;
