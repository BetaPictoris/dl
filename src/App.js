import SoftwareRow from "./components/SoftwareRow";
import "./styles/app.css";
import downloads from "./data/downloads.json";

function App() {
  return (
    <>
      <header>
        <a href="/">Haihaus Downloads</a>

        <nav>
          <a href="#report">Report</a>
          <a href="#request">Request</a>
        </nav>
      </header>

      <main>
        <table>
          <thead>
            <tr>
              <td>Manufacturer</td>
              <td>Software</td>
              <td>Edition</td>
              <td>Platform</td>
              <td>Download</td>
              <td>Notes</td>
            </tr>
          </thead>

          <tbody>
            {downloads.map((software) => (
              <SoftwareRow data={software} />
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <p>
          &copy; 2024 Daniel Hall &ndash;{" "}
          <a
            href="https://github.com/BetaPictoris/dl"
            target="_blank"
            rel="noreferrer"
          >
            MIT License
          </a>
        </p>
        <p>
          Haihaus Downloads does not host any content and is not affialated with
          Microsoft.
        </p>
      </footer>
    </>
  );
}

export default App;
