import SoftwareRow from "./components/SoftwareRow";
import "./styles/app.css";
import downloads from "./data/downloads.json";

function App() {
  return (
    <>
      <header>
        <a href="#">Haihaus Downloads</a>

        <nav>
          <a href="#report">Report</a>
          <a href="#request">Request</a>
        </nav>
      </header>

      <main>
        <p>
          Haihaus Downloads offers direct download links for software, it is not
          affialated with Microsoft.
        </p>

        <table>
          <thead>
            <tr>
              <td>Manufactuer</td>
              <td>Software</td>
              <td>Edition</td>
              <td>Platform</td>
              <td>Download</td>
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
        Created with ♥ by <a href="https://www.hai.haus">Daniel Hall</a>.
      </footer>
    </>
  );
}

export default App;
