import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../..';


export type TextComponent = {
    component: string;
    label: string;
    propValue: string;
    icon: string;
    style: {
        width: number;
        height: number;
        fontSize: number;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: number;
        textAlign: string;
        color: string;
    }
}

export type ButtonComponent = {
    component: string; 
    label: string;
    propValue: string;
    icon: string;
    style: {
        width: number;
        height: number;
        borderWidth: number;
        borderColor: string;
        borderRadius: string;
        fontSize: number;
        fontWeight: number;
        lineHeight: string;
        letterSpacing: number;
        textAlign: string;
        color: string;
        backgroundColor: string;
    },
};

export type PictureComponent =  {
    component: string; 
    label: string;
    icon: string;
    propValue: string;
    style: {
        width: number;
        height: number;
        borderRadius: string;
    },
};

export type Component = TextComponent | PictureComponent | ButtonComponent;

export interface ComponentState {
    componentList: Array<Component>;
}


const initialState: ComponentState = {
    componentList: []
};


export const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addComponent: (state, action: PayloadAction<Component>) => {
            state.componentList.push(action.payload);
        }
    }
});


export const { addComponent } = componentSlice.actions;

export const componentList = (state: RootState) => state.component.componentList;

export default componentSlice.reducer;