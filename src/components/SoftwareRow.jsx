import { useState } from "react";

export default function SoftwareRow({ data }) {
  const [edition, setEdition] = useState(0);
  const [platform, setPlatform] = useState(0);

  function changeEdition(payload) {
    setEdition(document.getElementById("edition").value);
    setPlatform(document.getElementById("platform").value);
  }

  function changePlatform(payload) {
    setPlatform(document.getElementById("platform").value);
  }

  function doDownload(payload) {
    window.open(data.editions[edition].platforms[platform].download);
  }

  return (
    <tr>
      <td>{data.manufactuerName}</td>
      <td>{data.softwareName}</td>
      <td>
        <select id="edition" onChange={changeEdition}>
          {data.editions.map((edition) => (
            <option value={data.editions.indexOf(edition)}>
              {edition.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select id="platform" onChange={changePlatform}>
          {data.editions[edition].platforms.map((platform) => (
            <option value={data.editions[edition].platforms.indexOf(platform)}>
              {platform.name}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button onClick={doDownload}>Submit</button>
      </td>
    </tr>
  );
}
