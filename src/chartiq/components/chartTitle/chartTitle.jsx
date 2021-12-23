import React, { useState, useEffect, useRef } from 'react';
import "./chartTitle.scss";
import { ChartContext } from '../../contexts/index';

export default function ChartTitle() {
	const { theme, stx } = React.useContext(ChartContext);
  const [upFlag, setUpFlag] = useState(false);
  const [data, setData] = useState({
		difference: 0,
		close: 0,
		changedValuePct: 0,
		symbol: '',
	});

	function usePrevious(value) {
		const ref = useRef();
		useEffect(() => {
			ref.current = value;
		});
		return ref.current;
	}

	const prevAmount = usePrevious(data);

	function closureDataOrserver() {
		stx.append("createDataSet", () => {
			const currentQuote = stx.getFirstLastDataRecord(
				stx.chart.dataSet,
				"Close",
				true
			);

			setData((prev) => {
				return {
					...prev,
					symbol: stx.chart.symbol,
					close: currentQuote.Close,
					difference: currentQuote.Close - prev.close,
					changedValuePct: ((currentQuote.Close - prev.close) / currentQuote.Close) * 100,
				}
			});
		});
	}

	useEffect(() => {
		setUpFlag(prevAmount && (prevAmount.close > data.close));
	}, [data])

	useEffect(() => {
		if (stx) {
			closureDataOrserver();
		}
	}, [stx])

  return (
    <div>
			<div className={`cq_title ${theme}`}>
				<div className="cq_title_symbol">
					{stx && stx.chart.symbol}
				</div>
				<div className="cq_title_price">
					<div className={`cq_title_current_price ${upFlag ? 'down' : 'up'}`}>
						{data.close && data.close.toFixed(2)}
					</div>
					<div className="cq_title_change">
						<div className={`cq_title_change_arrow ${upFlag ? 'up' : 'down'}`}></div>
						<div className="cq_title_change_value">{data.difference && data.difference.toFixed(2)}</div>
						<div className="cq_title_change_percent">( {data.changedValuePct && data.changedValuePct.toFixed(2)}% )</div>
					</div>
				</div>
			</div>
    </div>
  );
}
