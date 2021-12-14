import React from "react";
import "./Components.scss";
import { ChartTitle } from "../../components/index";
import {
	fakeTitleData,
	fakeTitleConfig,
	fakeTitleConfigLight,
} from "./MockData";
import { ChartContext } from '../../contexts/index';

export default class ComponentsDemo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			data: fakeTitleData[0],
		}
	}

	componentDidMount() {
		// Mock fake data
		setInterval(() => {
			if (this.state.count === fakeTitleData.length) {
				this.setState({ count: 0 });
			}

			this.setState({ data: fakeTitleData[this.state.count] });
			this.setState({ count: this.state.count + 1 });
		}, 1000);
	}

	render() {
		return (
			<div style={{ margin: "20px" }}>
				<h1>Chart Componets</h1>

				<h2>Title</h2>
					<section>
						<ChartContext.Provider value={fakeTitleConfigLight}>
								<ChartTitle
									data={this.state.data}
								/>
						</ChartContext.Provider>
						<ChartContext.Provider value={fakeTitleConfig}>
								<ChartTitle
									data={this.state.data}
								/>
						</ChartContext.Provider>
					</section>
			</div>
		);
	}
}
