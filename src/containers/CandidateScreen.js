
import React from 'react';
import { connect } from 'react-redux';

import { Text, View, TouchableHighlight, ListView } from 'react-native';

import homeStyle from '../styles/homeStyle'
import toolbarStyle from '../styles/toolbarStyle'
import * as candidteActions from '../actions/candidateActions'
import * as signInActions from '../redux/SignInLogic'
import * as homeReducer from '../redux/HomeReducer'

import { Actions } from 'react-native-router-flux'

export class HomeScreen extends React.Component {
    

    constructor(props) {
		super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.pressLogout = this.pressLogout.bind(this);
		this._pressRown = this._pressRown.bind(this);

        this.props.candidates = [];

		// var candidates = [{username : 'test username'}];
        this.state = {
            gotData : false,
            dataSource: this.ds.cloneWithRows(this.props.candidates)
        };
	}

    componentWillMount() {
        console.log('run this');
        this.props.getAllCandidates();
    }

    componentDidUpdate() {
	    this.setState({gotData: true,dataSource: this.ds.cloneWithRows(this.props.candidates) })
    }

    pressLogout() {
        console.log("Current store", this.context.store);

		this.props.logout();
		Actions.pop();
	}

	_pressRown(candidate) {
        Actions.candidate(candidate);
    }

	_renderRown(candidate) {
        return <TouchableHighlight
            onPress={()=> this._pressRown(candidate)}
            underlayColor = '#ddd'>
            <View style ={styles.row}>
                <Text style={{fontSize:18}}>{candidate.fullname} - {candidate.email}</Text>
                <View style={{flex:1}}>
                    <Text style={styles.selectionText}>{candidate.Skills}</Text>
                </View>
            </View>
        </TouchableHighlight>
    }

	render() {
		var full_name = this.props.userInfo ? this.props.userInfo['Full Name'] : "";
        return (
			<View>
				<View style={ toolbarStyle.toolbar }>
					<TouchableHighlight>
						<Text style={ toolbarStyle.toolbarButton}> = </Text>
					</TouchableHighlight>
						<Text style={ toolbarStyle.toolbarTitle}> Onboarding</Text>
					<TouchableHighlight onPress={ this.pressLogout }>
						<Text style={ toolbarStyle.toolbarButton}> Logout</Text>
					</TouchableHighlight>
				</View>

                <View>
                    <Text style={ homeStyle.messageBoxTitleText }>Hello, { full_name }</Text>
                </View>

                {
                    <ListView
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={ this._renderRown }
                    />
                }
			</View>
		);
	}
}

function mapStateToProps(state) {
    return {
        userInfo : state.SignInReducer.userInfo,
        candidates : state.CandidateReducer.candidates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout : () => dispatch(signInActions.logout()),
        getAllCandidates : () => dispatch(homeReducer.loadHomeScreenAsync())
    };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen)