import SoftwareRow from "./components/SoftwareRow";
import "./styles/app.css";
import downloads from "./data/downloads.json";

function App() {
  return (
    <>
      <header>
        <a href="/">Haihaus Downloads</a>

        <nav>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/betapictoris/dl/issues/new?assignees=&labels=bad+link&projects=&template=report-link.md&title=Fix+%5BManufacturer%5D+%5BSoftware%5D+%5BEdition%5D+%5BPlatform%5D+link"
          >
            Report
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/betapictoris/dl/issues/new?assignees=&labels=request&projects=&template=request-software.md&title=Add+%5BManufacturer%5D+%5BSoftware%5D"
          >
            Request
          </a>
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
