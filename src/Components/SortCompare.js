import React, { useContext } from 'react';
import ObjectContext from '../store/ObjectContext';

const SortCompare = () => {
    const objCtx = useContext(ObjectContext);
    
    return (
        <div className="SortCompare">
            <form>
                <select name="obj-sorter" onChange={objCtx.sorterHandler}>
                {objCtx.fieldAttrs.map(field => <option value={field.key} key={field.key}>{field.name}</option>)}
                </select>
                <select name="obj-sortdirection" onChange={objCtx.sortDirectionHandler}>
                <option value="">-</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                </select>
            </form>
            <p>Objects, sorted by {objCtx.fieldAttr.name}.</p>
            <ol>
            {
                objCtx.objects.map((object) => {
                return <li key={object.name}>{object.name}: {object[objCtx.sortBy]} {objCtx.fieldAttr.unit} </li>;
                })
            }
            </ol>            
        </div>
    );
};

export default SortCompare;