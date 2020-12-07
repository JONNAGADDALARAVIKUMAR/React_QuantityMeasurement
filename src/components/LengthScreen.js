import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Header from './Header';
import UnitConversionBlock from './UnitConversionBlock';
import UnitButtons from './UnitButtons';


export default class LengthScreen extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View>
                <ScrollView>
                    <Header/>
                    <UnitButtons
                        navigation = {this.props.navigation}
                        type = 'Length'
                    />
                    <UnitConversionBlock type = 'Length'/>
                </ScrollView>
            </View>
        )
    }
}