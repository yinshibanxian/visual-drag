import * as React from 'react';
import { TextComponent } from '../../../store/reducers/component';
import { getStyle } from '../../../utils/style';

interface IProps {
    component: TextComponent;
}

const Text: React.FunctionComponent<IProps> = (props) => {
    const { component } = props;
    const { style, propValue } = component;
    return (<div className='text' style={getStyle(style)} dangerouslySetInnerHTML={{ __html: propValue }}></div>)
}

export default Text;