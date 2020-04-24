import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCampsite({campsite}) {
    if (campsite)
    return( 
        <Card
            featuredTitle={campsite.name}
            image={require('./images/react-lake.jpg')}>
            <Text style={{margin:10}}>
                {campsite.description}
            </Text>
        </Card>
        );
    }
    return <view />;
}

function CampisteInfo(props){
    return <RenderCampsite campsite= {props.campsite} />
}
export default CampisteInfo;
