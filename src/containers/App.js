import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Header from "../components/Header";
import "./App.css";

import { setSearchfield, requestRobots } from "../actions";

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

function App(props) {
	const { searchField, onSearchChange, robots, isPending } = props;

	useEffect(() => {
		props.onRequestRobots();
	}, []);

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return robots.isPending ? (
		<h1>Loading</h1>
	) : (
		<div className="tc">
			<Header />
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
