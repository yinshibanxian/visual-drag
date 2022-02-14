import * as React from 'react';
import './index.scss';
import ToolBar from '../../components/toolbar';
import ComponentList, { componentList as list } from '../../components/componentList';
import { useAppSelector, useAppDispatch } from '../../store';
import { componentList, addComponent } from '../../store/reducers/component';
import _ from 'lodash';
import { Component } from '../../store/reducers/component/index';


const Home: React.FunctionComponent = () => {

    const editorRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
    const componentDataList = useAppSelector(componentList);
    const dispatch = useAppDispatch();

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
    }

    const handleDrop: React.DragEventHandler<HTMLDivElement> = (e) => {

        e.preventDefault();
        e.stopPropagation();
        const index = e.dataTransfer.getData('index') as string;
        const rectInfo = editorRef.current?.getBoundingClientRect();
        if (index) {
            const component = _.cloneDeep(list[+index]);
            dispatch(addComponent(component as unknown as Component));
        }

    }

    return (
        <div className='home'>
            <ToolBar />
            <main>
                <section className='left'>
                    <ComponentList />
                </section>
                <section className='center'>
                    <div 
                        className='content' onDragOver={handleDragOver} 
                        onDrop={handleDrop}
                        ref={editorRef}
                    />
                </section>
                <section className='right'></section>
            </main>
        </div>
    );
}

export default Home;