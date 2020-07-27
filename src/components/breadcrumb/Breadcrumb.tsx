import React from 'react';
import { BreadcrumbElements } from '../../types/interfaces';
import { Link } from 'react-router-dom';
 
export const Breadcrumb: React.FunctionComponent<BreadcrumbElements> = ({currentPathTitle, navigation}) => {
    
    return (
        <p className="Breadcrumb">
            { 
                navigation.map( 
                    hist => (
                        <Link to={hist.path}>{hist.title.toUpperCase()} &#32;&#47;&#32;</Link>
                    )
                )
            }
            { currentPathTitle }
        </p>
    )
}
