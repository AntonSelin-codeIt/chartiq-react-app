import React, { useState, useEffect, useRef } from 'react';
import {
	fakeTitleConfig,
} from "./MockData";

export const ChartContext = React.createContext();

export function ChartContextComponent(props) {

  const el = useRef(null);
  const [options, setOptions] = useState(fakeTitleConfig);

  function getEngine(el) {
		const contextEl = el.closest('cq-context');

		if (!contextEl.CIQ || !contextEl.CIQ.UI.context) {
			setTimeout(() => getEngine(el), 100);
			return
		}

		const uiContext = contextEl.CIQ.UI.context;
		const { stx } = uiContext;

    setOptions({
      ...options,
      uiContext,
      stx,
    });
  }

	useEffect(() => {
		el && getEngine(el.current);
	}, [])

  return (
    <div ref={el}>
      <ChartContext.Provider value={options}>
        {props.children}
      </ChartContext.Provider>
    </div>
  );
}
