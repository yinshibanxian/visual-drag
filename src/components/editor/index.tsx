import * as React from 'react';
import { Component, componentList } from '../../store/reducers/component';
import { useAppSelector } from '../../store';
import Text from '../visualComponents/Text';
import { getStyle } from '../../utils/style';

const renderComponent = (component: Component) => {
    switch(component.component) {
        case 'text':
            return <Text component={component} />;
    }
}

const Editor: React.FunctionComponent = () => {
    const componentListData = useAppSelector(componentList);
    console.log(componentListData, 'aaa');
    return (
        <div>
            {componentListData.map((component) => renderComponent(component))}
        </div>
    );
}

export default Editor;
