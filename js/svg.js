/** Class containing svg icons as strings. */
class SVG {
  constructor(width = "", height = "") {
    this.delete = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=${width}
                  height=${height}
                  class="delete-button-path"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="delete-button-svg"
                    d="M23.12 9.91L19.25 6a1 1 0 00-1.42 0 1 1 0 000 1.41L21.39 11H1a1 1 0 00-1 1 1 1 0 001 1h20.45l-3.62 3.61a1 1 0 000 1.42 1 1 0 001.42 0l3.87-3.88a3 3 0 000-4.24z"
                  ></path>
                </svg></button`;
  }
}
