import React from 'react';
import {connect} from 'react-redux';

import {Text, View, TouchableHighlight, ListView} from 'react-native';

import toolbarStyle from '../styles/toolbarStyle'


import {Actions} from 'react-native-router-flux'

import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form'
import * as candidateActions from '../actions/candidateActions'


export class CandidateScreen extends React.Component {


    constructor(props) {
        super(props);

        console.log('run constructor');
    }

    componentWillMount() {
        console.log('run this');
    }

    componentWillUnmount() {
        console.log('it will unmount');
    }

    componentDidUpdate() {
    }

    _pressClose() {
        Actions.pop()
    }

    _updateCandidate(isValid, values, validationResults, postSubmit = null, modalNavigator = null) {
        if (isValid === true) {
            // prepare object

            if(values.Current_Step) {
                values.Current_Step = values.Current_Step[0]
            }

            console.log('Object after update', values);
            this.props.updateCandidate(values);
            postSubmit();
        }
    }
    _handleValueChange(values) {
        console.log('handleValueChange', values);

        if(values.Current_Step) {
            values.Current_Step = values.Current_Step[0]
        }
        this.setState({candidate: values})

    }

    render() {

        const {username, fullname, email, Skills, CV, Current_Step, _id, role } = this.props.candidate;

        return (
            <GiftedForm
                clearOnClose={false}
                scrollEnabled={false}
                formName='signupForm'
                openModal={(route) => { Actions.formModal({ ...route, title: route.getTitle() }) }}
                onValueChange={this._handleValueChange.bind(this)}>

                <View>
                    <View style={ toolbarStyle.toolbar }>
                        <TouchableHighlight>
                            <Text style={ toolbarStyle.toolbarButton}> = </Text>
                        </TouchableHighlight>
                        <Text style={ toolbarStyle.toolbarTitle}> Onboarding</Text>
                        <TouchableHighlight onPress={ this._pressClose }>
                            <Text style={ toolbarStyle.toolbarButton}> Close</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <GiftedForm.TextInputWidget
                    name='fullname'
                    title='Full name'
                    placeholder='Marco Polo'
                    clearButtonMode='while-editing'
                    value={ fullname}/>

                <GiftedForm.TextInputWidget
                    name='username'
                    title='User Name'
                    placeholder='Marco Polo'
                    clearButtonMode='while-editing'
                    value={ username }/>

                <GiftedForm.TextInputWidget
                    name='email'
                    title='Email'
                    placeholder='marcopolo@yahoo.com'
                    clearButtonMode='while-editing'
                    value={ email}/>

                <GiftedForm.TextInputWidget
                    name='Skills'
                    title='Skills'
                    placeholder='Senior .NET Developer'
                    clearButtonMode='while-editing'
                    value={Skills}/>



                <GiftedForm.TextInputWidget
                    name='CV'
                    title='CV Url'
                    placeholder='http://..'
                    clearButtonMode='while-editing'
                    value={CV}/>

                <GiftedForm.SeparatorWidget />

                {/*<GiftedForm.TextAreaWidget name='Current_Step' title='Current Step'*/}
                                           {/*autoFocus={true}*/}
                                           {/*placeholder='Something interesting about yourself'>*/}

                {/*</GiftedForm.TextAreaWidget>*/}

                <GiftedForm.ModalWidget
                    displayValue='Current_Step'
                    title='Current Step'
                    scrollEnabled={false}>
                    <GiftedForm.SeparatorWidget />

                    <GiftedForm.SelectWidget name="Current_Step" title='Current Step' multiple={false} >
                        <GiftedForm.OptionWidget title='Passed' value='Passed'/>
                        <GiftedForm.OptionWidget title='Phone Call' value='Phone_Call'/>
                        <GiftedForm.OptionWidget title='Interviewed' value='Interviewed'/>
                        <GiftedForm.OptionWidget title='Reject' value='Reject'/>
                    </GiftedForm.SelectWidget>
                </GiftedForm.ModalWidget>

                <GiftedForm.HiddenWidget name='_id' value={ _id } />
                <GiftedForm.HiddenWidget name='role' value={ role } />

                <GiftedForm.SubmitWidget
                    title='Save'
                    widgetStyles={{
                    submitButton: {
                      backgroundColor: 'blue',
                    }}}
                    onSubmit={ this._updateCandidate.bind(this)}
                />


            </GiftedForm>



        );
    }
}

function mapStateToProps(state) {
    return {
        candidate: state.CandidateReducer.candidate
        // userInfo : state.SignInReducer.userInfo,
        // candidates : state.CandidateReducer.candidates
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateCandidate : (candidate) => dispatch(candidateActions.updateCandidateAsync(candidate))
        // logout : () => dispatch(signInActions.logout()),
        // getAllCandidates : () => dispatch(homeReducer.loadCandidateScreenAsync())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CandidateScreen)