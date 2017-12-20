import React, { Component } from 'react';
import {
	connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import Radium from 'radium';
import javascriptTimeAgo from 'javascript-time-ago'
import {
	WMCard,
	WMToggle,
    WMRaisedButton,
    WMTextField,
} from '@workmarket/front-end-components';
import {
	mapStateToProps,
	mapDispatchToProps,
} from '../../connect';
import styles from '../../styles';
import WMFeatureToggleDetails from '../WMFeatureToggleDetails';

javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'));
require('javascript-time-ago/intl-messageformat-global');
require('intl-messageformat/dist/locale-data/en');

class WMFeatureForm extends Component {
	render () {
        const {
            form,
            updateFormProp,
            saveForm,
            cancelForm
        } = this.props;

		return (
			<div
			>
                <div>
                    <WMTextField onChange={ (e, val) => updateFormProp('name')(val) } floatingLabelFixed floatingLabelText="Toggle Name" value={form.props.name}/>
                    <WMTextField onChange={ (e, val) => updateFormProp('key')(val) } floatingLabelFixed floatingLabelText="Key" value={form.props.key}/>
                    <WMTextField onChange={ (e, val) => updateFormProp('defaultValue')(val) } floatingLabelFixed floatingLabelText="Default Value" value={form.props.defaultValue}/>
                    <WMRaisedButton
                        label="Save"
                        primary
                        onClick={saveForm}
                    />
                    <WMRaisedButton
                        label="Cancel"
                        secondary
                         onClick={cancelForm}
                    />
                </div>
                <div>
                    <WMTextField onChange={ (e, val) => updateFormProp('description')(val) } floatingLabelFixed floatingLabelText="Description" value={form.props.description}/>
                </div>
                <WMFeatureToggleDetails
                    isDirtyState={ true }
                    isRolloutEnable={ true }
                    percentValue={ 12 }
                    typeValue={ 1 }
                />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Radium(WMFeatureForm));

WMFeatureForm.propTypes = {

};

WMFeatureForm.defaultProps = {

};
