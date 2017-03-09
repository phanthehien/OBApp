
import React from 'react';
import { connect } from 'react-redux';

import { Text, View, TouchableHighlight, ListView } from 'react-native';

import homeStyle from '../styles/homeStyle'
import toolbarStyle from '../styles/toolbarStyle'
import * as candidateActions from '../actions/candidateActions'
import * as signInActions from '../redux/SignInLogic'
import * as homeReducer from '../redux/HomeReducer'

import { Actions } from 'react-native-router-flux'

export class HomeScreen extends React.Component {
    

    constructor(props) {
		super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.pressLogout = this.pressLogout.bind(this);
		this._pressRown = this._pressRown.bind(this);
		this._renderRown = this._renderRown.bind(this);

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
        this.props.getCandidateDetail(candidate);
        Actions.candidate();
    }

	_renderRown(candidate) {
        return <TouchableHighlight
            onPress={()=> this._pressRown(candidate)}
            underlayColor = '#ddd'>
            <View style={ { flex: 1, flexDirection: 'row' } } >
                <View style ={homeStyle.style_column_view }>
                    <Text style={[{fontSize:18}, homeStyle.style_row_view ]}>{candidate.fullname} - {candidate.email}</Text>
                    <View style={[ homeStyle.style_text ]}>
                        <Text> { candidate.Skills } </Text>
                    </View>
                </View>

                <View style={ { flex: 0.3 }} >
                    <Text style = { { alignSelf: 'center' }} > {candidate.Current_Step} </Text>
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

                <ListView
                    scrollEnabled={false}
                    enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={ this._renderRown }
                />

                <View style={ { backgroundColor : 'red' }}>
                    <Text style={ { alignSelf : 'center'}}> CV->Phone_Call->Interview->Passed/Failed ==> Reject </Text>
                </View>

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
        getAllCandidates : () => dispatch(homeReducer.loadHomeScreenAsync()),
        getCandidateDetail : (candidate) => dispatch(candidateActions.getCandidateDetailSuccess(candidate))
    };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen)