import {
  getByLabelText,
  getByText,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  wait
} from "@testing-library/dom";
// adds special assertions like toHaveTextContent
// import "@testing-library/jest-dom/extend-expect";

import { getExampleDOM } from "../bar";

test("examples of some things", async () => {
  const famousWomanInHistory = "Ada Lovelace";
  const container = getExampleDOM();

  // Get form elements by their label text.
  // An error will be thrown if one cannot be found (accessibility FTW!)
  const input = getByLabelText(container, "Username");
  input.value = famousWomanInHistory;

  // Get elements by their text, just like a real user does.
  getByText(container, "Print Username").click();

  await wait(() =>
    expect(queryByTestId(container, "printed-username")).toBeTruthy()
  );
});
