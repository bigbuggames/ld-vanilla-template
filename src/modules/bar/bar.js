import { css } from "linaria";

const tomatoLabel = css`
  padding: 1em;
  color: tomato;
`;

export function getExampleDOM() {
  const div = document.createElement("div");
  div.innerHTML = `
    <label for="username" class=${tomatoLabel}>Username</label>
    <input id="username" />
    <button>Print Username</button>
  `;

  const button = div.querySelector("button");
  const input = div.querySelector("input");

  button.addEventListener("click", () => {
    setTimeout(() => {
      const printedUsernameContainer = document.createElement("div");
      printedUsernameContainer.innerHTML = `
          <div data-testid="printed-username">${input.value}</div>
        `;
      div.appendChild(printedUsernameContainer);
    }, Math.floor(Math.random() * 200));
  });

  return div;
}
