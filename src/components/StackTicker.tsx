import { STACK } from "../data/portfolio";

/**
 * Infinite marquee. The list is duplicated and the track translates -50%,
 * so the loop point is invisible.
 */
export function StackTicker() {
  return (
    <div className="ticker py-3">
      <div className="ticker-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="ticker-half" key={copy}>
            {STACK.map((item) => (
              <span key={`${copy}-${item}`} className="mono">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Stack: {STACK.join(", ")}</span>
    </div>
  );
}
