import * as React from 'react';
import { Button, Input } from '@douyinfe/semi-ui';
import './index.css';

const ToolBar: React.FunctionComponent = () => {
    return (
        <div className='toolbar'>
            <Button className='operate-btn' size='small'>撤销</Button>
            <Button className='operate-btn' size='small'>重做</Button>
        </div>
    );
}


export default ToolBar;