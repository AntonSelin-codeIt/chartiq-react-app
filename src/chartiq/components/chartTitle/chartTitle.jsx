import React, { useState, useEffect, useRef } from 'react';
import "./chartTitle.scss";

export default function ChartTitle({
	config
}) {

	const { symbol, price, changedValue, changedValuePtc } = config;
  const [upFlag, setUpFlag] = useState(false);

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	}

	const prevAmount = usePrevious(config);
    useEffect(() => {
				setUpFlag(prevAmount && (prevAmount.price > config.price));
    }, [config])

  return (
    <div>
			<div className="cq_title">
				<div className="cq_title_symbol">
					{symbol}
				</div>
				<div className="cq_title_price">
					<div className="cq_title_current_price">
						{price}
					</div>
					<div className="cq_title_change">
						<div className={`cq_title_change_arrow ${upFlag ? 'up' : 'down'}`}></div>
						<div className="cq_title_change_value">{changedValue}</div>
						<div className="cq_title_change_percent">( {changedValuePtc} )</div>
					</div>
				</div>
			</div>
    </div>
  );
}
