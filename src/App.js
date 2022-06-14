import axios from "axios";
import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [simpsonsOnly, setSimpsonsOnly] = useState(false);
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=10")
      .then((res) => {
        setQuoteList(res.data);
      });
  }, []);

  return (
    <div>
      <button onClick={() => setSimpsonsOnly(!simpsonsOnly)}>
        Simpsons family Only {simpsonsOnly ? "ON" : "OFF"}
      </button>
      {quoteList
        .filter(
          (quote) => quote.character?.endsWith("Simpson") || !simpsonsOnly
        )
        .map((quote, index) => (
          <QuoteCard key={index} {...quote} />
        ))}
    </div>
  );
}

export default App;
